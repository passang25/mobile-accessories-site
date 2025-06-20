import { useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  collection,
  getDocs
} from 'firebase/firestore';
import useAuthUser from './useAuthUser';

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { user, loading } = useAuthUser(); // ✅ synced user state

  useEffect(() => {
    if (loading || !user) return;

    const cartRef = collection(db, 'carts', user.uid, 'items');
    const unsubscribe = onSnapshot(cartRef, (snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setCartItems(items);
    });

    return () => unsubscribe();
  }, [user, loading]);

  const addToCart = async (product) => {
    if (!user) return alert('Please login to add to cart');
    const productRef = doc(db, 'carts', user.uid, 'items', product.id.toString());
    await setDoc(productRef, { ...product, qty: 1 });
  };

  const updateQuantity = async (productId, newQty) => {
    if (!user) return;
    const item = cartItems.find((i) => i.id === productId.toString());
    if (!item) return;
    const productRef = doc(db, 'carts', user.uid, 'items', productId.toString());
    await setDoc(productRef, { ...item, qty: newQty });
  };

  const removeFromCart = async (productId) => {
    if (!user) return;
    const productRef = doc(db, 'carts', user.uid, 'items', productId.toString());
    await deleteDoc(productRef);
  };

  const clearCart = async () => {
    if (!user) return;
    const cartRef = collection(db, 'carts', user.uid, 'items');
    const snapshot = await getDocs(cartRef);
    snapshot.forEach((doc) => deleteDoc(doc.ref));
  };

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId.toString());
  };

  const cartCount = cartItems.reduce((total, item) => total + (item.qty || 1), 0);

  return {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    isInCart,
    cartCount
  };
};

export default useCart;
