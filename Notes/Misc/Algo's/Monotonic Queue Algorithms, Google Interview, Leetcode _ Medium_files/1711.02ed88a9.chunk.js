(self.webpackChunklite=self.webpackChunklite||[]).push([[1711],{31579:(e,n,t)=>{"use strict";t.d(n,{DI:()=>r,nj:()=>l,q_:()=>a,IA:()=>o,Sn:()=>s});var i=t(87329),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"useNewsletterV3Subscription_newsletterV3"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NewsletterV3"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"}}]}},{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"newsletterV3"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]}}]},l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"useNewsletterV3Subscription_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"newsletterV3"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"useNewsletterV3Subscription_newsletterV3"}}]}}]}}].concat((0,i.Z)(r.definitions))},a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"SubscribeNewsletterV3Mutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"newsletterV3Id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"shouldRecordConsent"}},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"subscribeNewsletterV3"},arguments:[{kind:"Argument",name:{kind:"Name",value:"newsletterV3Id"},value:{kind:"Variable",name:{kind:"Name",value:"newsletterV3Id"}}},{kind:"Argument",name:{kind:"Name",value:"shouldRecordConsent"},value:{kind:"Variable",name:{kind:"Name",value:"shouldRecordConsent"}}}]}]}}]},o={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UnsubscribeNewsletterV3Mutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"newsletterV3Id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"unsubscribeNewsletterV3"},arguments:[{kind:"Argument",name:{kind:"Name",value:"newsletterV3Id"},value:{kind:"Variable",name:{kind:"Name",value:"newsletterV3Id"}}}]}]}}]},s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"FetchOrLazilyCreateNewsletterV3AndMaybeSubscribeMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe"},arguments:[{kind:"Argument",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"useNewsletterV3Subscription_newsletterV3"}}]}}]}}].concat((0,i.Z)(r.definitions))}},61279:(e,n,t)=>{"use strict";t.d(n,{o:()=>S});var i=t(96156),r=t(34699),l=t(82492),a=t.n(l),o=t(21919),s=t(67294),u=t(25735),d=t(9354),c=t(61095),m=t(18627),v=t(66411),b=t(78285),p=t(31579),k=t(47148);function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var S=function(e){var n=e.newsletterV3,t=e.creator,i=e.newsletterName,l=e.hideLinkInConfirmationToast,f=void 0!==l&&l,S=n||{},h=S.id,g=S.type,N=S.slug,y=S.collection,E=(null==n?void 0:n.user)||t,V=null!=i?i:null==n?void 0:n.name,O=s.useState(!1),D=(0,r.Z)(O,2),F=D[0],x=D[1],T=(0,d.T)({newsletterSlug:N,collectionSlug:null==y?void 0:y.slug,username:null==E?void 0:E.username}),C=T.viewerEdge,I=T.loading,M=(0,u.V)({name:"enable_auto_follow_on_subscribe",placeholder:!1}),P=s.useState(!1),A=(0,r.Z)(P,2),U=A[0],_=A[1];s.useEffect((function(){_(!(null==C||!C.isSubscribed))}),[null==C?void 0:C.isSubscribed]);var j=(0,m.A)(),R=(0,v.Qi)(),B=(0,b.w)();F&&j.event("newsletterV3.subscribe.error",{newsletterV3Id:h});var L=function(e,n,t){if(t){var i={id:"User:".concat(null==E?void 0:E.id),fragment:p.nj,fragmentName:"useNewsletterV3Subscription_user"},r=e.readFragment(i);r&&e.writeFragment(w(w({},i),{},{data:w(w({},r),{},{newsletterV3:t})}))}if(C){var l=e.readQuery({query:k.C,variables:{newsletterSlug:N||"",collectionSlug:(null==y?void 0:y.slug)||null,username:(null==E?void 0:E.username)||null}}),o=a()({},l,{newsletterV3:{viewerEdge:{isSubscribed:n}}});e.writeQuery({query:k.C,variables:{newsletterSlug:N||"",collectionSlug:(null==y?void 0:y.slug)||null,username:(null==E?void 0:E.username)||null},data:o})}n&&null!=E&&E.id&&M&&(0,c.I0)(e,E.id,{isFollowing:!0})},Z=(0,o.D)(p.q_,{onCompleted:function(e){var n=e.subscribeNewsletterV3;x(!n),n&&(j.event("newsletterV3.subscribeClicked",{newsletterV3Id:h,source:R}),_(!0))},update:function(e){L(e,!0)}}),z=(0,r.Z)(Z,1)[0],G=(0,o.D)(p.IA,{onCompleted:function(e){var n=e.unsubscribeNewsletterV3;x(!n),n&&(_(!1),B({duration:f?5e3:"NEXTPAGE",toastStyle:"NEWSLETTER_UNSUBSCRIBE",extraParams:{newsletterName:V||null,newsletterType:g||null,unsubscribeFn:function(){return _(!1)},hideEmailSettingsLink:f,hideCloseButton:f}}))},update:function(e){L(e,!1)}}),H=(0,r.Z)(G,1)[0],W=(0,o.D)(p.Sn,{onCompleted:function(e){var n=e.fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe;x(!n),n&&(j.event("newsletterV3.subscribeClicked",{newsletterV3Id:n.id,source:R}),_(!0))},update:function(e,n){var t,i=w({},null===(t=n.data)||void 0===t?void 0:t.fetchOrLazilyCreateNewsletterV3AndMaybeSubscribe);L(e,!0,i)}}),q=(0,r.Z)(W,1)[0];return{isSubscribed:U,hasError:F,setSubscribe:function(e){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];x(!1),e&&!n&&null!=t&&t.id?q({variables:{userId:null==t?void 0:t.id}}):e&&null!=n&&n.id?z({variables:{newsletterV3Id:null==n?void 0:n.id,shouldRecordConsent:i}}):null!=n&&n.id?H({variables:{newsletterV3Id:null==n?void 0:n.id}}):x(!0)},loading:I}}},47148:(e,n,t)=>{"use strict";t.d(n,{C:()=>r});var i=t(87329),r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"NewsletterV3ViewerEdge"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"newsletterSlug"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"collectionSlug"}},type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"username"}},type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"newsletterV3"},arguments:[{kind:"Argument",name:{kind:"Name",value:"newsletterSlug"},value:{kind:"Variable",name:{kind:"Name",value:"newsletterSlug"}}},{kind:"Argument",name:{kind:"Name",value:"collectionSlug"},value:{kind:"Variable",name:{kind:"Name",value:"collectionSlug"}}},{kind:"Argument",name:{kind:"Name",value:"username"},value:{kind:"Variable",name:{kind:"Name",value:"username"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NewsletterV3"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"NewsletterV3ViewerEdge_newsletterV3ViewerEdge"}}]}}]}}]}}]}}].concat((0,i.Z)([{kind:"FragmentDefinition",name:{kind:"Name",value:"NewsletterV3ViewerEdge_newsletterV3ViewerEdge"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NewsletterV3ViewerEdge"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"isSubscribed"}}]}}]))}},9354:(e,n,t)=>{"use strict";t.d(n,{T:()=>l});var i=t(64718),r=t(47148),l=function(e){var n,t=e.newsletterSlug,l=void 0===t?"":t,a=e.collectionSlug,o=void 0===a?null:a,s=e.username,u=void 0===s?null:s,d=(0,i.a)(r.C,{variables:{newsletterSlug:l,collectionSlug:o,username:u},ssr:!1,skip:!l&&!u}),c=d.loading,m=d.error,v=d.data;return c?{loading:c}:m?{error:m}:{viewerEdge:null==v||null===(n=v.newsletterV3)||void 0===n?void 0:n.viewerEdge}}},43822:(e,n,t)=>{"use strict";t.d(n,{a:()=>v});var i=t(96156),r=t(67294),l=t(86706),a=t(47230),o=t(93310),s=t(18627),u=t(66411),d=t(50458);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v=(0,l.$j)((function(e){return{authDomain:e.config.authDomain}}))((function(e){var n=e.authDomain,t=e.buttonSize,i=e.buttonStyle,l=e.children,c=e.eventData,v=void 0===c?{}:c,b=e.inline,p=void 0!==b&&b,k=e.isButton,f=void 0!==k&&k,w=e.linkStyle,S=void 0===w?"SUBTLE":w,h=e.post,g=e.redirectUrl,N=e.width,y=e.id,E=e.onClick,V=g||(0,d.OA)(n),O=(0,s.A)(),D=(0,u.Lk)(),F=function(){var e,n;O.event("upsell.clicked",m(m({},v),{},{dimension:null==D?void 0:D.dimension,locationId:null==D?void 0:D.dimension,postId:null==h?void 0:h.id,authorId:null==h||null===(e=h.creator)||void 0===e?void 0:e.id,sequenceId:(null==h||null===(n=h.sequence)||void 0===n?void 0:n.sequenceId)||""}))};return f?r.createElement(a.zx,{buttonStyle:i,href:V,onClick:function(){null==E||E(),F()},size:t,width:N,id:y},l):r.createElement(o.r,{onClick:function(){null==E||E(),F()},href:V,linkStyle:S,inline:p,id:y},l)}))},31711:(e,n,t)=>{"use strict";t.d(n,{N:()=>ie});var i=t(34699),r=t(67294),l=t(32317),a=t(21919),o={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UpdateUserPostSubscribeMembershipUpsellShownAt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userUpdatePostSubscribeMembershipUpsellShownAt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"postSubscribeMembershipUpsellShownAt"}}]}}]}}]},s=t(6443),u=t(14818),d=t(13791),c=t(77355),m=t(54945),v=t(87691),b=t(18627),p=t(66411),k=t(43487),f=t(87498),w=t(78870),S=t(50458),h="after_subscribe_membership_upsell",g=function(e){var n=e.user,t=e.isVisible,l=e.hide,g=(0,k.v9)((function(e){return e.config.authDomain})),N=(0,b.A)(),y=(0,s.H)(),E=y.value,V=y.loading;r.useEffect((function(){var e;V||null!=E&&E.postSubscribeMembershipUpsellShownAt||(N.event("newsletterV3.postSubscribeMembershipUpsellViewed",{newsletterV3Id:null===(e=n.newsletterV3)||void 0===e?void 0:e.id,source:h}),D())}),[V]);var O=(0,a.D)(o,{optimisticResponse:{userUpdatePostSubscribeMembershipUpsellShownAt:{__typename:"User",id:(null==E?void 0:E.id)||"",postSubscribeMembershipUpsellShownAt:(new Date).getTime()}}}),D=(0,i.Z)(O,1)[0];return r.createElement(p.cW,{source:{name:h}},r.createElement(d.v,{isVisible:t,hide:l,withCloseButton:!0,withAnimation:!0,buttonStyle:"STRONG",buttonSize:"REGULAR",cancelText:"Not now",confirmText:"Become a member",onConfirm:function(){var e,t;N.event("newsletterV3.postSubscribeMembershipUpsellClicked",{newsletterV3Id:null===(e=n.newsletterV3)||void 0===e?void 0:e.id,source:h}),t=(0,w.Rk)((0,S.c5)(g),{subscribeToUserId:n.id,source:h}),window.location.href=t},showCancelButton:!0,isDestructiveAction:!1},r.createElement(c.x,{marginBottom:"24px"},r.createElement(u.z,{miroId:n.imageId||f.gG,alt:n.name||"",diameter:80,freezeGifs:!1})),r.createElement(c.x,{marginBottom:{xs:"8px",sm:"8px",md:"16px",lg:"16px",xl:"16px"}},r.createElement(m.H2,{scale:{xs:"S",sm:"S",md:"L",lg:"L",xl:"L"}},"You’re subscribed to get email updates. Become a member for more.")),r.createElement(c.x,{marginBottom:"32px"},r.createElement(v.F,{tag:"span",scale:{xs:"M",sm:"M",md:"L",lg:"L",xl:"L"},color:"DARKER"},"Your membership fee directly supports ",n.name," and other writers you read. Get full access to every story on Medium."))))},N=t(77280),y=t(61279),E=t(93661),V=t(98863),O=t(26350),D=t(43822),F=t(47230),x=t(73917),T=t(69992),C=t(1383),I=t(14646),M=t(31889),P=t(34135),A=t(75221),U=t(78285);function _(){return _=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},_.apply(this,arguments)}var j=r.createElement("path",{d:"M14 7.29L15.6 9 18 6M11.62 7.04H7a1 1 0 0 0-1 1v7.13a1 1 0 0 0 1 1h8.54a1 1 0 0 0 1-1v-3.21"}),R=r.createElement("path",{d:"M6 8.44l5.27 3.87 1.4-1.06.7-.52"});const B=function(e){return r.createElement("svg",_({width:23,height:23,viewBox:"0 0 23 23",fill:"none"},e),j,R)};function L(){return L=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},L.apply(this,arguments)}var Z=r.createElement("path",{d:"M24 13l2 2 3-3.5M19.5 12.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5"}),z=r.createElement("path",{d:"M11.5 14.5L19 20l4-3"});const G=function(e){return r.createElement("svg",L({width:38,height:38,viewBox:"0 0 38 38",fill:"none"},e),Z,z)};function H(){return H=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},H.apply(this,arguments)}var W=r.createElement("path",{d:"M14.58 6.89h3.92M16.39 9V5.08M11.62 7.04H7a1 1 0 0 0-1 1v7.13a1 1 0 0 0 1 1h8.54a1 1 0 0 0 1-1v-3.21"}),q=r.createElement("path",{d:"M6 8.44l5.27 3.87 2.81-2.11"});const Q=function(e){return r.createElement("svg",H({width:23,height:23,viewBox:"0 0 23 23",fill:"none"},e),W,q)};function K(){return K=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},K.apply(this,arguments)}var Y=r.createElement("rect",{x:26.25,y:9.25,width:.5,height:6.5,rx:.25}),J=r.createElement("rect",{x:29.75,y:12.25,width:.5,height:6.5,rx:.25,transform:"rotate(90 29.75 12.25)"}),X=r.createElement("path",{d:"M19.5 12.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5"}),$=r.createElement("path",{d:"M11.5 14.5L19 20l4-3"});const ee=function(e){return r.createElement("svg",K({width:38,height:38,viewBox:"0 0 38 38",fill:"none"},e),Y,J,X,$)};var ne=t(68894),te=function(e){var n=e.user,t=e.showMembershipUpsellModal,l=void 0!==t&&t,a=e.showPostFollowSubscribeTooltip,o=void 0!==a&&a,u=e.hidePostFollowSubscribeTooltip,d=e.isVisible,m=void 0===d||d,f=e.isCompact,h=void 0!==f&&f,_=e.buttonStyleFn,j=void 0===_?function(e){return e?"OBVIOUS":"STRONG"}:_,R=r.useRef(null),L=(0,I.I)(),Z=(0,M.F)(),z=(0,s.H)().value,H=(0,ne.O)(!1),W=(0,i.Z)(H,3),q=W[0],K=W[1],Y=W[2],J=n.newsletterV3,X=(0,U.w)(),$=(0,b.A)(),te=(0,p.pK)(),ie=(0,p.Qi)(),re=(0,N.PM)(),le=(0,y.o)({newsletterV3:J,creator:n,newsletterName:n.name||void 0}),ae=le.isSubscribed,oe=le.hasError,se=le.loading,ue=le.setSubscribe,de=(0,k.v9)((function(e){return e.config.authDomain})),ce=(0,w.Rk)((0,S.c5)(de),{subscribeToUserId:n.id,source:ie}),me=!(null==z||!z.membership),ve=r.useState(!1),be=(0,i.Z)(ve,2),pe=be[0],ke=be[1],fe=r.useState(!1),we=(0,i.Z)(fe,2),Se=we[0],he=we[1],ge=(0,p.P7)(re||"").susiEntry,Ne=void 0===ge?"":ge,ye=["newsletter_v3_promo","writer_subscription_landing"].includes(Ne),Ee=["newsletter_v3_promo"].includes(Ne),Ve=(0,E.OS)({membershipType:E.FM.Monthly}),Oe=!1,De=function(){var e;!Oe&&m&&Fe()&&($.event("newsletterV3.subscribePresented",{newsletterV3Id:(null===(e=n.newsletterV3)||void 0===e?void 0:e.id)||"",source:te}),Oe=!0)},Fe=function(){var e;if(!R.current)return!1;var n=null===(e=R.current)||void 0===e?void 0:e.getBoundingClientRect(),t=n.top+n.height/2;return t>=0&&t<=window.innerHeight};r.useEffect((function(){return De(),window&&P.V6.on("scroll",De),function(){P.V6.off("scroll",De)}}),[]),r.useEffect((function(){De()}),[m]);var xe=(0,ne.O)(!1),Te=(0,i.Z)(xe,3),Ce=Te[0],Ie=Te[1],Me=Te[2],Pe=function(e,n){var t=(0,s.H)(),i=t.value,l=t.loading,a=r.useRef(null),o=!(null==i||!i.membership),u=(0,N.PM)(),d=(0,p.P7)(u||"").susiEntry,c=["newsletter_v3_promo","writer_subscription_landing","subscribe_user"].includes(void 0===d?"":d);if(l)return!1;if(null!==a.current)return a.current;var m=c&&!o&&!e.viewerEdge.isUser&&!!e.isPartnerProgramEnrolled&&!(null!=i&&i.postSubscribeMembershipUpsellShownAt);return a.current=m,m}(n),Ae=r.useState(!1),Ue=(0,i.Z)(Ae,2),_e=Ue[0],je=Ue[1];r.useEffect((function(){l&&ae&&!_e&&Pe?Ie():Me()}),[ae,_e,Pe]),r.useEffect((function(){re&&!Pe&&ye&&ae&&(!Ee&&ie===Ne||Ee)&&X({duration:"NEXTPAGE",toastStyle:"NEWSLETTER_SUBSCRIBE",extraParams:{newsletterName:n.name,newsletterType:A.Rr.NEWSLETTER_TYPE_AUTHOR,unsubscribeFn:function(){return ue(!1)}}})}),[re,ae]),r.useEffect((function(){if(ae&&Se&&J){var e=!me&&!!n.isPartnerProgramEnrolled;e&&$.event("newsletterV3.postSubscribeMembershipUpsellViewed",{newsletterV3Id:J.id,source:ie}),ke(e),he(!1)}}),[ae,Se,J]);var Re=(0,V.f)().isWorkingPreview;if(oe||n.viewerEdge.isUser&&!Re)return null;var Be,Le=j(!!ae),Ze=function(e,n){return function(t){return{stroke:n?t.colorTokens.background.neutral.secondary.base:e,height:h?"23px":"36px",width:h?"23px":"36px"}}},ze=L(Ze("OBVIOUS"===Le?Z.colorTokens.background.accent.primary.base:Z.baseColor.fill.dark,se)),Ge=L(Ze("STRONG"===Le?Z.colorTokens.background.neutral.primary.base:Z.backgroundColor,se));Be=ae?h?r.createElement(B,{className:ze}):r.createElement(G,{className:ze}):h?r.createElement(Q,{className:Ge}):r.createElement(ee,{className:Ge});var He=r.createElement(F.zx,{loading:se,buttonStyle:Le,onClick:function(){var e;he(!ae),z?ae?ue(!1):z&&z.allowEmailAddressSharingEditorWriter?ue(!0,!1):K():null!==(e=n.newsletterV3)&&void 0!==e&&e.id?$.event("newsletterV3.subscribeClicked",{newsletterV3Id:n.newsletterV3.id,source:ie}):$.event("user.LOSubscribeClicked",{targetUserId:n.id,source:ie})},padding:"0","aria-label":"Subscribe"},Be),We=function(){return r.createElement(c.x,{padding:"14px 12px 20px",maxWidth:"220px"},r.createElement(v.F,{tag:"div",scale:"S",color:"DARKER"},r.createElement("strong",null,"You're subscribed to ",n.name,". Become a member for more.")," Get full access to every story on Medium for ",Ve," a month."),r.createElement(c.x,{paddingTop:"8px"},r.createElement(D.a,{isButton:!0,buttonStyle:"STRONG",buttonSize:"SMALL",redirectUrl:ce,width:"150px",onClick:function(){$.event("newsletterV3.postSubscribeMembershipUpsellClicked",{newsletterV3Id:J.id,source:ie})}},r.createElement(c.x,{textAlign:"center"},r.createElement(v.F,{scale:"S",color:"WHITE"},"Become a member")))))},qe=function(){return r.createElement(c.x,{padding:"10px 12px",maxWidth:"166px"},r.createElement(v.F,{tag:"div",scale:"S",color:"DARKER"},"Subscribe to get an email whenever ",n.name," publishes."))},Qe=function(e){var n=e.children;return r.createElement(x.J,{isVisible:!!u&&!ae,hide:u,placement:"bottom",popoverRenderFn:qe,targetDistance:10,role:"tooltip"},n)},Ke=function(e){var n=e.children;return r.createElement(x.J,{isVisible:!se&&pe,hide:function(){return ke(!1)},placement:"bottom",popoverRenderFn:We,targetDistance:10,role:"tooltip"},n)},Ye=function(e){var n=e.children;return r.createElement(T.$,{isVisible:!se&&!ae,hideOnClick:!0,noPortal:!0,mouseEnterDelay:500,mouseLeaveDelay:0,placement:"bottom",popoverRenderFn:qe,role:"tooltip",targetDistance:10},n)},Je=function(e){var n=e.children;return o&&!ae?r.createElement(Qe,null,n):pe?r.createElement(Ke,null,n):r.createElement(Ye,null,n)};return r.createElement("div",{ref:R},r.createElement(Je,null,r.createElement(c.x,null,z&&r.createElement(C.Q,{onConfirm:function(){ue(!0,!0)},isVisible:q,hide:Y,titleText:"Confirm your subscription to ".concat(n.name),confirmText:"Confirm now",buttonStyle:"STRONG",buttonSize:"LARGE",showCancelButton:!1,withCloseButton:!1,isDestructiveAction:!1},"When you subscribe to a writer or publication, your email address will be shared with them so they can stay in contact with you outside of Medium. Opt out any time by unsubscribing in Settings."),z?He:r.createElement(O.R,{operation:"register",newsletterV3:J,user:n,actionUrl:J?(0,S.Zu)(J.id):(0,S.lc)(n.id),susiEntry:"subscribe_user"},He))),Ce&&r.createElement(g,{user:n,isVisible:Ce,hide:function(){je(!0),Me()}}))},ie=function(e){var n=e.creator,t=e.followButtonSize,a=void 0===t?"REGULAR":t,o=e.shouldHideTooltip,s=void 0!==o&&o,u=e.post,d=e.showMembershipUpsellModal,m=e.susiEntry,v=e.isVisible,b=e.width,p=e.isSubscribeCompact,k=void 0!==p&&p,f=e.buttonStyleFn,w=r.useState(!1),S=(0,i.Z)(w,2),h=S[0],g=S[1];return r.createElement(r.Fragment,null,r.createElement(l.B,{buttonSize:a,onClick:function(){n.viewerEdge.isFollowing||g(!0)},post:u,user:n,susiEntry:m,width:b,buttonStyleFn:f}),r.createElement(c.x,{marginLeft:k?"4px":"8px"},r.createElement(te,{user:n,showMembershipUpsellModal:d,showPostFollowSubscribeTooltip:h&&!s,hidePostFollowSubscribeTooltip:function(){return g(!1)},isVisible:v,isCompact:k,buttonStyleFn:f})))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/1711.02ed88a9.chunk.js.map