import React, { Component } from 'react';
import { convertToRaw,draftToMarkdown } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
//import draftToMarkdown from 'draftjs-to-markdown';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
//import draftToHtml from 'draftjs-to-html';
//import draftToMarkdown from 'draftjs-to-markdown';
/**
 * https://jpuri.github.io/react-draft-wysiwyg/#/docs?_k=jjqinp
 */
export default class draftWySiwyg extends Component {
	state = {
    editorState: undefined,
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  }
	
	render(){
	//	const { editorState } = this.state;
    return (
      <div>
        <Editor
          onEditorStateChange={this.onEditorStateChange}
        />
        {/* <textarea
				   style = {{width:'100%',height:'100vh'}}

        /> */}
      </div>
    );
	}
}