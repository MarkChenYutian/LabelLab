(this["webpackJsonplabellab-client"]=this["webpackJsonplabellab-client"]||[]).push([[21],{184:function(e,t,a){"use strict";var c=a(50),n=a.n(c),r=(a(60),a(51)),i=a.n(r),s=(a(5),a(0)),o=a.n(s),l=a(176),d=a(418),u=a(419),p=a(49),b=a(334),j=a(678),h=a(422);function m(e){var t=e.children,a=e.className,c=e.content,r=i()("sub header",a),s=Object(d.a)(m,e),l=Object(u.a)(m,e);return o.a.createElement(l,n()({},s,{className:r}),p.a.isNil(t)?c:t)}m.handledProps=["as","children","className","content"],m.propTypes={},m.create=Object(h.f)(m,(function(e){return{content:e}}));var f=m;function v(e){var t=e.children,a=e.className,c=e.content,r=i()("content",a),s=Object(d.a)(v,e),l=Object(u.a)(v,e);return o.a.createElement(l,n()({},s,{className:r}),p.a.isNil(t)?c:t)}v.handledProps=["as","children","className","content"],v.propTypes={};var O=v;function N(e){var t=e.attached,a=e.block,c=e.children,r=e.className,s=e.color,h=e.content,m=e.disabled,v=e.dividing,g=e.floated,E=e.icon,k=e.image,P=e.inverted,y=e.size,S=e.sub,C=e.subheader,D=e.textAlign,A=i()("ui",s,y,Object(l.a)(a,"block"),Object(l.a)(m,"disabled"),Object(l.a)(v,"dividing"),Object(l.d)(g,"floated"),Object(l.a)(!0===E,"icon"),Object(l.a)(!0===k,"image"),Object(l.a)(P,"inverted"),Object(l.a)(S,"sub"),Object(l.b)(t,"attached"),Object(l.c)(D),"header",r),G=Object(d.a)(N,e),K=Object(u.a)(N,e);if(!p.a.isNil(c))return o.a.createElement(K,n()({},G,{className:A}),c);var T=b.a.create(E,{autoGenerateKey:!1}),U=j.a.create(k,{autoGenerateKey:!1}),w=f.create(C,{autoGenerateKey:!1});return T||U?o.a.createElement(K,n()({},G,{className:A}),T||U,(h||w)&&o.a.createElement(O,null,h,w)):o.a.createElement(K,n()({},G,{className:A}),h,w)}N.handledProps=["as","attached","block","children","className","color","content","disabled","dividing","floated","icon","image","inverted","size","sub","subheader","textAlign"],N.propTypes={},N.Content=O,N.Subheader=f;t.a=N},666:function(e,t,a){"use strict";a.r(t);var c=a(27),n=a(13),r=a(14),i=a(16),s=a(15),o=a(17),l=a(0),d=a.n(l),u=a(19),p=a(692),b=a(328),j=a(184),h=a(334),m=a(398),f=a(366),v=a(691),O=a(73),N=(a(667),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).handleUpdate=function(){a.setState({edit:!a.state.edit})},a.handleSubmit=function(){var e=a.props,t=e.updateProject,c=e.project;t({projectDescription:a.state.desc},c.projectId,a.callback)},a.callback=function(){var e=a.props,t=e.project,c=e.fetchProject;a.setState({edit:!1}),c(t.projectId)},a.handleChange=function(e){a.setState(Object(c.a)({},e.target.name,e.target.value))},a.state={edit:!1,desc:""},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.project;e.project!==t&&this.setState({desc:t.projectDescription})}},{key:"render",value:function(){var e=this.props.actions,t=this.state,a=t.edit,c=t.desc;return d.a.createElement("div",{className:"projectDesc-parent"},e.isfetching?d.a.createElement(p.a,{active:!0},d.a.createElement(b.a,{indeterminate:!0},"Have some patience :)")):null,d.a.createElement("div",{className:"projectDesc-header"},d.a.createElement(j.a,{content:"Project Description",as:"h4"}),d.a.createElement(h.a,{name:"pencil alternate",onClick:this.handleUpdate})),a?d.a.createElement(m.a,null,d.a.createElement(f.a,{placeholder:"Write some project description",value:c,onChange:this.handleChange,name:"desc"}),d.a.createElement(v.a,{className:"projectDesc-submit",floated:"right",onClick:this.handleSubmit},"Submit")):null,!a&&c?c:null)}}]),t}(l.Component));t.default=Object(u.b)((function(e){return{project:e.projects.currentProject,actions:e.projects.projectActions}}),(function(e){return{updateProject:function(t,a,c){return e(Object(O.v)(t,a,c))},fetchProject:function(t){return e(Object(O.i)(t))}}}))(N)},667:function(e,t,a){}}]);
//# sourceMappingURL=21.21edb66a.chunk.js.map