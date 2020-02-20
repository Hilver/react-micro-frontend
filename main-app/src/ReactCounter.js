import React, {PureComponent} from 'react';

class ReactCounter extends PureComponent {

    // create a ref so we can pass the element to mount and unmount
    counterRef = React.createRef();

    componentDidMount() {
        // initial render with props
        window.ReactCounter.mount(this.props, this.counterRef.current);
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props){
            window.ReactCounter.mount(this.props, this.counterRef.current);
        }
    }

    componentWillUnmount(){
        window.ReactCounter.unmount(this.counterRef.current);
    }

    render() {
        return <div ref={this.counterRef}></div>
    }
}

export default ReactCounter;