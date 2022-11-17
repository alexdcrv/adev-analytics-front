import { injectable } from 'inversify'
import {  action, makeObservable, observable } from 'mobx'
import 'reflect-metadata'
import { RootStore } from './RootStore'
import {fetchProfile, IFetchProfileResponseData} from "../api/profile";
import axios from 'axios';
import { AuthToken, innerBackend } from '../utils/utilities';
import { baseURL } from '../utils/config';
import { getAuthToken } from '../service';
import { toast } from 'react-toastify';

export enum StatusEnum {
    Paid,
    Unpaid,
    Overdue
}

interface ITx {
    txhash: string
    paymentDate: Date|number|string
    address: string
    income: true
    _id?:string
    value: number
}

@injectable()
export class TransactionStore {
    @observable transactions:ITx[] = [{
        txhash: 'string',
        paymentDate: '13.10.2020',
        address: '0x12',
        value: 130,
        income: true,
        _id:'sadas'
    },{
        txhash: 'string',
        paymentDate: '13.10.2020',
        address: '0x12',
        value: -200,
        income: true,
        _id:'sadas'
    },{
        txhash: 'string',
        paymentDate: '13.10.2020',
        address: '0x12',
        value: 330,
        income: true,
        _id:'sadas'
    }]

    public constructor(private readonly rootStore: RootStore) {
        makeObservable(this)
    }
    //get user data
    @action async getAllTransactions() {
        AuthToken(getAuthToken())
        try {
            const { data } = await innerBackend.get(`/workers/all`)
            this.transactions = data
        } catch(e) {
            toast.error("ERROR")
        }
    }
    @action async getTotalInfo() {
        AuthToken(getAuthToken())
        try {
            
        } catch(e) {
            toast.error("ERROR")
        }
    }
}
