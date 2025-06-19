// src/hooks/useCart.js
import { useEffect, useState } from 'react';
import { doc, setDoc, deleteDoc, onSnapshot, collection } from 'firebase/firestore';
import { db, auth } from '../firebase';

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
    if (!user) return alert('Please log in to add to cart');

    const productRef = doc(db, 'carts', user.uid, 'items', product.id.toString());
    await setDoc(productRef, product);
  };

  const removeFromCart = async (productId) => {
    const user = auth.currentUser;
    if (!user) return;

    const productRef = doc(db, 'carts', user.uid, 'items', productId.toString());
    await deleteDoc(productRef);
  };

  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId.toString());
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    isInCart,
  };
};

export default useCart;
