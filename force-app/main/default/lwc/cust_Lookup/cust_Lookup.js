import { LightningElement, wire } from 'lwc';
import getaccounts from '@salesforce/apex/lwc_lookup.getaccounts';

export default class Cust_Lookup extends LightningElement {
    lookupvalue='';
    accList

    @wire(getaccounts,{inputValue : '$lookupvalue'})
    accountList({error,data}){
        if (data) {
            this.accList=data;
            console.log('data : ',this.accList);
        } else if (error) {
            console.log(this.error);
        }
    }
    
    setLookupValue(event){
        console.log('hello : '+event.target.value);
        // eslint-disable-next-line eqeqeq
        this.lookupvalue = event.target.value == null || event.target.value == ''? '' : event.target.value;
        if(this.lookupvalue === ''){
            this.accList=[];
        }
        console.log('#lookupval : ',this.lookupvalue);
        
    }
}