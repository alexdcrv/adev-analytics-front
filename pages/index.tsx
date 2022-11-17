import classNames from 'classnames'
import { observer } from 'mobx-react'
import type { NextPage } from 'next'
import NetChangeChart from '../components/netChange/netChangeChart'
import Total from '../components/total/total'
import WorkersTable from '../components/txtable/txtable'
import s from './home.module.sass'

const Home: NextPage = observer((props) => {

    return (
        <div className={classNames(s.container, s.main)}>
            <Total/>
            <NetChangeChart dates={['10.11','12.11','14.11','16.11']} prices={[1,2,4,2]}/>
            <WorkersTable/>
        </div>
    )
})

export default Home
