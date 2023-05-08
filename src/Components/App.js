import React, { useState , useEffect} from "react";
import Editor from "./Editor";
import useLocalStorage from './useLocalStorage'

function App() {
  const [html , setHtml] = useState('html','')
  const [CSS, setCSS] = useState('CSS','')
  const [JS, setJS] = useState('JS','')
  const[srcDoc, setsrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout ( () => {
      setsrcDoc(`
      <html>
      <body>${html}</body>
      <style>${CSS}</style>
      <script>${JS}</script>
    </html>
      `)
    }, /*300*/)
    return () => clearTimeout(timeout)
    }, [html, CSS, JS]);
    
  
  return(
    <>
      <div className = "pane top-pane">
        <Editor language='xml'
        displayName="HTML"
        value={html}
        onChange = {setHtml}  />
        <Editor language='CSS'
        displayName="CSS"
        value={CSS}
        onChange={setCSS}
        />
        <Editor language='JS'
        displayName="JS"
        value={JS}
        onChange={setJS}
        />
      </div>
      <div className="pane">
        <iframe 
        srcDoc={srcDoc}
        title="output" 
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
        >


        </iframe>
      </div>
    </>
  )
}

export default App;
