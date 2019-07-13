// look up if multiple arguments are passed in?

const D = C => {
    const { children } = this.props
    console.log(children)
}

class myClass extends React.Component {
    render() {
        const { children } = this.props
        return (
            <span>{ children }</span>
        )
    }
}

const X = D(myClass, "world")

console.log(X)

