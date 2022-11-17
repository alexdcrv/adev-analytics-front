import classNames from "classnames";
import { useInjection } from "inversify-react";
import { observer } from "mobx-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProjectsStore } from "../../stores/ProjectsStore";
import { UserStore } from "../../stores/UserStore";
import { WorkersStore } from "../../stores/TxTableStore";
import { getDate } from "../../utils/helper";
import style from "../workers/workers.module.sass";

const ProjectsTable = observer(() => {
  const projectsStore = useInjection(ProjectsStore);
  const [sort, setSort] = useState("");
  useEffect(()=>{
    projectsStore.getAllProjects()
  },[])
  return (
    <div className={style.container}>
      <div className={classNames(style.header)}>
        <div
          className={style.part}
          style={{ display: "flex", alignItems: "center" }}
        >

          <b
            onClick={() => {
              setSort("name");
            }}
          >
            Name
          </b>
        </div>
        <div
          className={style.part}
          onClick={() => {
            setSort("gamesW");
          }}
        >
          <b>Budget</b>
        </div>
        <div
          className={style.part}
          onClick={() => {
            setSort("setsW");
          }}
        >
          <b>Deadline</b>
        </div>
        <div
          className={style.part}
          onClick={() => {
            setSort("wins");
          }}
        >
          <b>status</b>
        </div>
      </div>
      {projectsStore.projects && projectsStore.projects.map((el, i) => {
        return (
          
            <div className={classNames(style.row)}>
              <div className={style.part}>{el.name}</div>
              <div className={style.part}>{'$ '}{el.budget}</div>
              <div className={style.part}>{getDate(el.deadline)}</div>
              <div className={style.part}><input  type={'checkbox'} /></div>
            </div>
        
        );
      })}
    </div>
  );
});
export default ProjectsTable;
