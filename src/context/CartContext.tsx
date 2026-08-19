import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react'
import type { CartItem } from '@/types'

interface CartState {
  items: CartItem[]
  isOpen: boolean
}

type Action =
  | { type: 'ADD_ITEM'; item: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; id: string }
  | { type: 'UPDATE_QTY'; id: string; quantity: number }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART'; open?: boolean }

const CART_KEY = 'YIDAN CAO LLC_cart'

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveCart(items: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(items))
}

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.id === action.item.id)
      let next: CartItem[]
      if (existing) {
        next = state.items.map((i) =>
          i.id === action.item.id ? { ...i, quantity: i.quantity + 1 } : i,
        )
      } else {
        next = [...state.items, { ...action.item, quantity: 1 }]
      }
      saveCart(next)
      return { ...state, items: next, isOpen: true }
    }
    case 'REMOVE_ITEM': {
      const next = state.items.filter((i) => i.id !== action.id)
      saveCart(next)
      return { ...state, items: next }
    }
    case 'UPDATE_QTY': {
      if (action.quantity <= 0) {
        const next = state.items.filter((i) => i.id !== action.id)
        saveCart(next)
        return { ...state, items: next }
      }
      const next = state.items.map((i) =>
        i.id === action.id ? { ...i, quantity: action.quantity } : i,
      )
      saveCart(next)
      return { ...state, items: next }
    }
    case 'CLEAR_CART': {
      saveCart([])
      return { ...state, items: [] }
    }
    case 'TOGGLE_CART':
      return { ...state, isOpen: action.open ?? !state.isOpen }
    default:
      return state
  }
}

const CartContext = createContext<{
  items: CartItem[]
  isOpen: boolean
  itemCount: number
  subtotal: number
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string) => void
  updateQty: (id: string, qty: number) => void
  clearCart: () => void
  toggleCart: (open?: boolean) => void
} | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    items: [],
    isOpen: false,
  })

  useEffect(() => {
    const saved = loadCart()
    if (saved.length > 0) {
      saved.forEach((item) => {
        dispatch({ type: 'ADD_ITEM', item })
      })
    }
  }, [])

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        itemCount,
        subtotal,
        addItem: (item) => dispatch({ type: 'ADD_ITEM', item }),
        removeItem: (id) => dispatch({ type: 'REMOVE_ITEM', id }),
        updateQty: (id, qty) => dispatch({ type: 'UPDATE_QTY', id, quantity: qty }),
        clearCart: () => dispatch({ type: 'CLEAR_CART' }),
        toggleCart: (open) => dispatch({ type: 'TOGGLE_CART', open }),
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
