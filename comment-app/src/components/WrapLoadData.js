import { Component } from 'react'

const fn = (WrappedComponent, itemName) => {
    class LoadLocalStorage extends Component {
        constructor () {
            super()
            this.state = { data:null }
        }
        UNSAFE_componentWillMount () {
            this._loadData()
        }
        _loadData () {
            let data = localStorage.getItem(itemName)
            try {
                this.setState({ data: JSON.parse(data) })
            } catch (error) {
                this.setState({ data })
            }
        }
        _saveData (data) {
            try {
                localStorage.setItem(itemName, JSON.stringify(data))
            } catch (error) {
                localStorage.setItem(itemName, `${data}`)
            }
        }
        render () {
            return (
                <WrappedComponent
                    data={this.state.data}
                    saveData={this._saveData.bind(this)}
                    {...this.props}
                />
            )
        }
    }
    return LoadLocalStorage
}
export default fn