// src/hooks/useCart.js
import { useEffect, useState } from 'react';
import { db, auth } from '../firebase';

// Inside useCart.js
import { doc, setDoc, deleteDoc, onSnapshot, collection, getDocs } from 'firebase/firestore';
// ... other imports

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const cartRef = collection(db, 'carts', user.uid, 'items');
    const unsubscribe = onSnapshot(cartRef, (snapshot) => {
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCartItems(items);
    });

    return () => unsubscribe();
  }, []);

  const addToCart = async (product) => {
    const user = auth.currentUser;
    if (!user) return alert('Please login to add to cart');
    const productRef = doc(db, 'carts', user.uid, 'items', product.id.toString());
    await setDoc(productRef, { ...product, qty: 1 }); // default qty
  };

  const updateQuantity = async (productId, newQty) => {
    const user = auth.currentUser;
    const item = cartItems.find(i => i.id === productId.toString());
    if (!user || !item) return;
    const productRef = doc(db, 'carts', user.uid, 'items', productId.toString());
    await setDoc(productRef, { ...item, qty: newQty });
  };

  const removeFromCart = async (productId) => {
    const user = auth.currentUser;
    if (!user) return;
    const productRef = doc(db, 'carts', user.uid, 'items', productId.toString());
    await deleteDoc(productRef);
  };

  const clearCart = async () => {
    const user = auth.currentUser;
    if (!user) return;
    const cartRef = collection(db, 'carts', user.uid, 'items');
    const snapshot = await getDocs(cartRef);
    snapshot.forEach(doc => deleteDoc(doc.ref));
  };

  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId.toString());
  };

  return {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    isInCart,
  };
};


export default useCart;
