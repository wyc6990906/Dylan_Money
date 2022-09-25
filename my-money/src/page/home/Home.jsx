import React from 'react';
import TransactionForm from "./transactionForm";
import styles from "./Home.module.css"
import {useAuthContext} from "../../hooks/useAuthContext";
import {useCollection} from "../../hooks/useCollection";
import TransactionList from "./TransactionList";

const Home = () => {
  const {user} = useAuthContext()
  // should be 'transactions' but make mistake when create it
  const {documents, error} = useCollection('transaction',
    ["uid", "==", user.uid],
    ['createdAt', 'desc'])
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents}/>}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid}/>
      </div>
    </div>
  );
};

export default Home;
