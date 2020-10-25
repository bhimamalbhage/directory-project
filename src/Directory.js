import React, { Component } from 'react'
export default class Directory extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            directory: {
                type: "folder",
                name: "My Drive",
                path: "/mydrive",
                childrens: [{
                    type: "folder",
                name: "My Folder",
                path: "/mydrive/myfolder",
                childrens: []
                }] 
            },
            currentDir : [],
            name: "",
            showPopup: false 
        }
    }
    togglePopup = () =>{
        this.setState({
            showPopup : !this.state.showPopup
        })
    }

    changeName = (e) =>{
        this.setState({
            name: e.target.value
        })
    }

    addFolder = () =>{
        // const folderName = this.state.name;
        // if(folderName.includes("/"))
        // {
        //     var index = folderName.indexOf("/");
        //     var parent = folderName.slice(0,index);
        //     var child = folderName.slice(index+1,folderName.length);
        //     console.log("Parent is: "+parent);
        //     console.log("Child is: "+child);
        //     const x = this.addFolderToParent(parent,child);
        //     console.log(x);
        // }

        const newfolder = { type: "folder",
        name: this.state.name,
        path: `/mydrive/${this.state.name}`,
        childrens: []
    };
        this.setState({
            directory: {...this.state.directory,childrens:[...this.state.directory.childrens,newfolder]}
        },() => console.log(this.state.directory.childrens));
   
    }

    addFolderToParent = (parent,child) =>{
        this.setState({
            directory : {...this.state.directory,}
        })
    }
    

    render() {
        return (
            <div className="directory">
                <div onClick={this.togglePopup.bind(this)}>
                    <span className="new">New</span><span> +</span>
                </div>
                <div className="directory-input">
                {this.state.showPopup && <div className="inputDiv">
                    <input onChange={(e) => this.changeName(e)} value={this.state.name} />
                    <button onClick={()=>this.addFolder()}>Create</button>
                    </div>
                    }
                </div>
                <div className="directory-bottom">
                <h2>Navigate Folders</h2>
                    <ul className="breadcrumb">
                    <li>{this.state.directory.name}</li>
                    {this.state.directory.childrens.map((child,i)=>{
                    return <li key={i}>{child.name}</li>
                    })}
                    </ul>
                </div>
            </div>
        )
    }
}
