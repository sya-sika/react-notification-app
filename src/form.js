import React, {Component} from 'react'

export default class setTaskForm extends Component {
    constructor()
    {
        this.years = [2019,2020,2021]
        this.months = []
        this.days = []
        this.hours = [0]
        this.minutes = [0]

        for(let i=1;i<60;i++){
            if(i <= 12) {
                //0なし
                this.month[i-1] = i
            }
            if(i < 24) {
                this.hour[i] = i;
            }
            if(i <= 31) {
                //0なし
                this.day[i-1] = i
            }
            this.minute[i] = i
        }
    }
}