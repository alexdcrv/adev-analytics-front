import classNames from "classnames";
import { useInjection } from "inversify-react";
import { observer } from "mobx-react";

import { useEffect, useState } from "react";
import { TransactionStore } from "../../stores/TransactionStore";
import { getDate } from "../../utils/helper";
import style from "./txtable.module.sass";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const WorkersTable = observer(() => {
  const transactionStore = useInjection(TransactionStore);
  
  useEffect(() => {
    transactionStore.getAllTransactions();
  }, []);

  return (
    <div className={style.container}>
      <div className={classNames(style.header)}>
        <div
          className={style.part}
          style={{ display: "flex", alignItems: "center" }}
        >
          <b
            
          >
            TxHash
          </b>
        </div>
        
        <div
          className={style.part}
          
        >
          <b>Payment date</b>
        </div>
        <div className={style.part_address_header}>
          <b>address</b>
        </div>
        <div
          className={style.part}
          
        >
          <b>status</b>
        </div>
        <div
          className={style.part}
          
        >
          <b>sum</b>
        </div>
      </div>
      {transactionStore.transactions &&
        transactionStore.transactions.map((el, i) => {
          return (
            <div className={classNames(style.row)} key={i}>
              <div className={style.part}>
                <CopyToClipboard
                  text={el?.txhash}
                  onCopy={() => {
                    toast.success("Copied");
                  }}
                >
                  <>{el?.txhash}</>
                </CopyToClipboard>
              </div>
              <div className={style.part}>{getDate(el.paymentDate)}</div>
              <div className={style.part_address}>
                <CopyToClipboard
                  text={el?.address}
                  onCopy={() => {
                    toast.success("Copied");
                  }}
                >
                  <>{el?.address}</>
                </CopyToClipboard>
              </div>
              <div className={style.part}>{el.income ? 'income' : 'outcome'}</div>
              <div className={style.part}>{el.value}</div>
            </div>
          );
        })}
    </div>
  );
});
export default WorkersTable;
