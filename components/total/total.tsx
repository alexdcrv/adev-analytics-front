import classNames from "classnames";
import { useInjection } from "inversify-react";
import { observer } from "mobx-react";

import { useEffect, useState } from "react";
import { TransactionStore } from "../../stores/TransactionStore";
import { getDate } from "../../utils/helper";
import style from "./total.module.sass";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const WorkersTable = observer(() => {
  const transactionStore = useInjection(TransactionStore);
  
  useEffect(() => {
    transactionStore.getTotalInfo();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.infoBlock}>
        <h3>Funds</h3>
        <h2>123$</h2>
      </div>
      <div className={style.infoBlock}>
        <h3>Income</h3>
        <h2>1500$</h2>
      </div>
      <div className={style.infoBlock}>
        <h3>Outcome</h3>
        <h2>-1223$</h2>
      </div>
      <div className={style.infoBlock}>
        <h3>Net change</h3>
        <h2>232$</h2>
      </div>
    </div>
  );
});
export default WorkersTable;
