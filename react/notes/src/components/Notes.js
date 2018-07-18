import React, { Component } from 'react'
import Note from './Note'
import { db, loadCollection } from '../database/index'


class Notes extends Component {
    constructor (props) {
        super(props)
        this.getInitialData()
    }
    getInitialData(){
        loadCollection('notes')
        .then(collection => {
            // console.log(collection)
            // collection.insert([
            //     {
            //         text: 'hello ~'
            //     },
            //     {
            //         text: 'hola ~'
            //     }
            // ])
            // db.saveDatabase()
            const entities = collection.chain()
            .find()
            .simplesort('$loki', 'isdesc')
            .data()
            // console.log(entities)
            this.setState({
                entities
            })
        })
    }
    // state vue data
    state = {
        entities: []
    }
    createEntry () {
        // console.log(this.state.entities)
        loadCollection('notes')
        .then((collection) => {
            const entity = collection.insert({
                text: ''
            })
            db.saveDatabase();
            this.setState((prevState) => {
                const _entities = prevState.entities
                _entities.unshift(entity)
                return{
                    entities: _entities
                }
            })
        })
    }
    destroyEntity(entity){
        console.log(entity)
        const _entities = this.state.entities.filter((_entity) => {
            return _entity.$loki !== entity.$loki
        })
        this.setState({
            entities: _entities
        })
        loadCollection('notes')
        .then((collection) => {
            collection.remove(entity)
            db.saveDatabase()
        })
    }

    render () {
        // react 独有的JSX 模板引擎
        // 在js里写html
        // react className
        // html-> js node 是会被编译成js的，class是一个关键字
        const entities = this.state.entities
        const noteItems = entities.map((entity, index) => 
            <Note
                key={ entity.$loki }
                entity = {entity}
                destroyEntity = { this.destroyEntity.bind(this) }
            />
        )
        // console.log(noteItems)
        return (
            <div className="ui container notes">
                <h4 className="ui horizontal divider header">
                    <i className="paw icon"></i>
                    Notes App _ React.js
                </h4>
                <button className="ui right floated basic violet button" onClick={ this.createEntry.bind(this) }>添加笔记</button>
                <div className="ui divided items">
                    { noteItems }
                    { !this.state.entities.length && <span className="ul small disabled header">还没有笔记，请先添加</span>}
                </div>
            </div>
        );
    }
}
export default Notes