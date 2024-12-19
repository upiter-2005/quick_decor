export const Gtm:React.FC = () => {
    return(
        <script
        dangerouslySetInnerHTML={{
          __html: `
           (function(w,d,t,u,c){
        var s=d.createElement(t),j=d.getElementsByTagName(t)[0];s.src=u;s["async"]=true;s.defer=true;s.onload=function(){KeyCRM.render(c);};j.parentNode.insertBefore(s,j)
      })(window, document, "script","https://chat.key.live/bundles/widget.min.js",{token:"0c1f0b74-546e-4ed7-94c1-79e206b12622"});
          `,
            }}
          />
    )
}