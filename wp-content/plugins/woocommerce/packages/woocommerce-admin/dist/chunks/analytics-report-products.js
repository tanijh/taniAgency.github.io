(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[15],{580:function(e,t,r){"use strict";r.r(t);r(64),r(37),r(53),r(60),r(49),r(61);var o=r(7),n=r.n(o),a=r(22),c=r.n(a),i=r(23),s=r.n(i),l=r(24),u=r.n(l),m=r(25),d=r.n(m),p=r(14),b=r.n(p),_=r(0),f=(r(41),r(177),r(88),r(192),r(170),r(2)),y=r(65),v=r(1),g=r.n(v),O=r(59),h=r(26),j=r(622),w=r(603),S=r(623),k=r(602),C=r(599),R=r(604),q=r(625),P=r(605),E=r(210);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=b()(e);if(t){var n=b()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return d()(this,r)}}var x=function(e){u()(r,e);var t=N(r);function r(){return c()(this,r),t.apply(this,arguments)}return s()(r,[{key:"getChartMeta",value:function(){var e=this.props,t=e.query,r=e.isSingleProductView,o=e.isSingleProductVariable,n="compare-products"===t.filter&&t.products&&t.products.split(",").length>1||r&&o?"item-comparison":"time-comparison";return{compareObject:r&&o?"variations":"products",itemsLabel:r&&o?Object(f.__)("%d variations",'woocommerce'):Object(f.__)("%d products",'woocommerce'),mode:n}}},{key:"render",value:function(){var e=this.getChartMeta(),t=e.compareObject,r=e.itemsLabel,o=e.mode,n=this.props,a=n.path,c=n.query,i=n.isError,s=n.isRequesting,l=n.isSingleProductVariable,u=n.addCesSurveyForAnalytics;if(i)return Object(_.createElement)(C.a,{isError:!0});var m=V({},c);return"item-comparison"===o&&(m.segmentby="products"===t?"product":"variation"),j.c[0].filters.find((function(e){return"compare-products"===e.value})).settings.onClick=u,Object(_.createElement)(_.Fragment,null,Object(_.createElement)(P.a,{query:c,path:a,filters:j.c,advancedFilters:j.a,report:"products"}),Object(_.createElement)(R.a,{mode:o,charts:j.b,endpoint:"products",isRequesting:s,query:m,selectedChart:Object(w.a)(c.chart,j.b),filters:j.c,advancedFilters:j.a}),Object(_.createElement)(k.a,{charts:j.b,mode:o,filters:j.c,advancedFilters:j.a,endpoint:"products",isRequesting:s,itemsLabel:r,path:a,query:m,selectedChart:Object(w.a)(m.chart,j.b)}),l?Object(_.createElement)(q.a,{baseSearchQuery:{filter:"single_product"},isRequesting:s,query:c,filters:j.c,advancedFilters:j.a}):Object(_.createElement)(S.a,{isRequesting:s,query:c,filters:j.c,advancedFilters:j.a}))}}]),r}(_.Component);x.propTypes={path:g.a.string.isRequired,query:g.a.object.isRequired},t.default=Object(y.compose)(Object(h.withSelect)((function(e,t){var r=t.query,o=t.isRequesting,n=!r.search&&r.products&&1===r.products.split(",").length;if(o)return{query:V({},r),isSingleProductView:n,isRequesting:o};var a=e(O.ITEMS_STORE_NAME),c=a.getItems,i=a.isResolving,s=a.getItemsError;if(n){var l=parseInt(r.products,10),u={include:l},m=c("products",u),d=m&&m.get(l)&&"variable"===m.get(l).type,p=i("getItems",["products",u]),b=Boolean(s("products",u));return{query:V(V({},r),{},{"is-variable":d}),isSingleProductView:n,isRequesting:p,isSingleProductVariable:d,isError:b}}return{query:r,isSingleProductView:n}})),Object(h.withDispatch)((function(e){return{addCesSurveyForAnalytics:e(E.c).addCesSurveyForAnalytics}})))(x)},613:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));r(64);var o=r(22),n=r.n(o),a=r(23),c=r.n(a),i=r(24),s=r.n(i),l=r(25),u=r.n(l),m=r(14),d=r.n(m),p=r(0),b=(r(129),r(5)),_=r(4),f=r(145),y=r(50);function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=d()(e);if(t){var n=d()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return u()(this,r)}}var g=function(e){s()(r,e);var t=v(r);function r(){return n()(this,r),t.apply(this,arguments)}return c()(r,[{key:"getCategoryAncestorIds",value:function(e,t){for(var r=[],o=e.parent;o;)r.unshift(o),o=t.get(o).parent;return r}},{key:"getCategoryAncestors",value:function(e,t){var r=this.getCategoryAncestorIds(e,t);if(r.length)return 1===r.length?t.get(Object(b.first)(r)).name+" › ":2===r.length?t.get(Object(b.first)(r)).name+" › "+t.get(Object(b.last)(r)).name+" › ":t.get(Object(b.first)(r)).name+" … "+t.get(Object(b.last)(r)).name+" › "}},{key:"render",value:function(){var e=this.props,t=e.categories,r=e.category,o=e.query,n=Object(y.getPersistedQuery)(o);return r?Object(p.createElement)("div",{className:"woocommerce-table__breadcrumbs"},this.getCategoryAncestors(r,t),Object(p.createElement)(f.Link,{href:Object(y.getNewPath)(n,"/analytics/categories",{filter:"single_category",categories:r.id}),type:"wc-admin"},r.name)):Object(p.createElement)(_.Spinner,null)}}]),r}(p.Component)},622:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return u}));r(41);var o=r(2),n=r(141),a=r(600),c=Object(n.applyFilters)("woocommerce_admin_products_report_charts",[{key:"items_sold",label:Object(o.__)("Items Sold",'woocommerce'),order:"desc",orderby:"items_sold",type:"number"},{key:"net_revenue",label:Object(o.__)("Net Sales",'woocommerce'),order:"desc",orderby:"net_revenue",type:"currency"},{key:"orders_count",label:Object(o.__)("Orders",'woocommerce'),order:"desc",orderby:"orders_count",type:"number"}]),i={label:Object(o.__)("Show",'woocommerce'),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(o.__)("All Products",'woocommerce'),value:"all"},{label:Object(o.__)("Single Product",'woocommerce'),value:"select_product",chartMode:"item-comparison",subFilters:[{component:"Search",value:"single_product",chartMode:"item-comparison",path:["select_product"],settings:{type:"products",param:"products",getLabels:a.d,labels:{placeholder:Object(o.__)("Type to search for a product",'woocommerce'),button:Object(o.__)("Single Product",'woocommerce')}}}]},{label:Object(o.__)("Comparison",'woocommerce'),value:"compare-products",chartMode:"item-comparison",settings:{type:"products",param:"products",getLabels:a.d,labels:{helpText:Object(o.__)("Check at least two products below to compare",'woocommerce'),placeholder:Object(o.__)("Search for products to compare",'woocommerce'),title:Object(o.__)("Compare Products",'woocommerce'),update:Object(o.__)("Compare",'woocommerce')}}}]},s={showFilters:function(e){return"single_product"===e.filter&&!!e.products&&e["is-variable"]},staticParams:["filter","products","chartType","paged","per_page"],param:"filter-variations",filters:[{label:Object(o.__)("All Variations",'woocommerce'),chartMode:"item-comparison",value:"all"},{label:Object(o.__)("Single Variation",'woocommerce'),value:"select_variation",subFilters:[{component:"Search",value:"single_variation",path:["select_variation"],settings:{type:"variations",param:"variations",getLabels:a.g,labels:{placeholder:Object(o.__)("Type to search for a variation",'woocommerce'),button:Object(o.__)("Single Variation",'woocommerce')}}}]},{label:Object(o.__)("Comparison",'woocommerce'),chartMode:"item-comparison",value:"compare-variations",settings:{type:"variations",param:"variations",getLabels:a.g,labels:{helpText:Object(o.__)("Check at least two variations below to compare",'woocommerce'),placeholder:Object(o.__)("Search for variations to compare",'woocommerce'),title:Object(o.__)("Compare Variations",'woocommerce'),update:Object(o.__)("Compare",'woocommerce')}}}]},l=Object(n.applyFilters)("woocommerce_admin_products_report_filters",[i,s]),u=Object(n.applyFilters)("woocommerce_admin_products_report_advanced_filters",{})},623:function(e,t,r){"use strict";r(64);var o=r(22),n=r.n(o),a=r(23),c=r.n(a),i=r(18),s=r.n(i),l=r(24),u=r.n(l),m=r(25),d=r.n(m),p=r(14),b=r.n(p),_=r(0),f=(r(41),r(129),r(51),r(139),r(170),r(88),r(2)),y=r(65),v=r(132),g=r(26),O=r(5),h=r(50),j=r(145),w=r(281),S=r(85),k=r(59),C=r(613),R=r(614),q=r(606),P=r(598);r(624);function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=b()(e);if(t){var n=b()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return d()(this,r)}}var F=Object(S.g)("manageStock","no"),V=Object(S.g)("stockStatuses",{}),N=function(e){u()(r,e);var t=E(r);function r(){var e;return n()(this,r),(e=t.call(this)).getHeadersContent=e.getHeadersContent.bind(s()(e)),e.getRowsContent=e.getRowsContent.bind(s()(e)),e.getSummary=e.getSummary.bind(s()(e)),e}return c()(r,[{key:"getHeadersContent",value:function(){return[{label:Object(f.__)("Product Title",'woocommerce'),key:"product_name",required:!0,isLeftAligned:!0,isSortable:!0},{label:Object(f.__)("SKU",'woocommerce'),key:"sku",hiddenByDefault:!0,isSortable:!0},{label:Object(f.__)("Items Sold",'woocommerce'),key:"items_sold",required:!0,defaultSort:!0,isSortable:!0,isNumeric:!0},{label:Object(f.__)("Net Sales",'woocommerce'),screenReaderLabel:Object(f.__)("Net Sales",'woocommerce'),key:"net_revenue",required:!0,isSortable:!0,isNumeric:!0},{label:Object(f.__)("Orders",'woocommerce'),key:"orders_count",isSortable:!0,isNumeric:!0},{label:Object(f.__)("Category",'woocommerce'),key:"product_cat"},{label:Object(f.__)("Variations",'woocommerce'),key:"variations",isSortable:!0},"yes"===F?{label:Object(f.__)("Status",'woocommerce'),key:"stock_status"}:null,"yes"===F?{label:Object(f.__)("Stock",'woocommerce'),key:"stock",isNumeric:!0}:null].filter(Boolean)}},{key:"getRowsContent",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=this.props.query,o=Object(h.getPersistedQuery)(r),n=this.context,a=n.render,c=n.formatDecimal,i=n.getCurrencyConfig,s=i();return Object(O.map)(t,(function(t){var n=t.product_id,i=t.items_sold,l=t.net_revenue,u=t.orders_count,m=t.extended_info||{},d=m.category_ids,p=m.low_stock_amount,b=m.manage_stock,y=m.sku,g=m.stock_status,O=m.stock_quantity,k=m.variations,q=void 0===k?[]:k,P=Object(v.decodeEntities)(m.name),E=Object(h.getNewPath)(o,"/analytics/orders",{filter:"advanced",product_includes:n}),N=Object(h.getNewPath)(o,"/analytics/products",{filter:"single_product",products:n}),x=e.props.categories,A=d&&d.map((function(e){return x.get(e)})).filter(Boolean)||[],B=Object(R.a)(g,O,p)?Object(_.createElement)(j.Link,{href:Object(S.f)("post.php?action=edit&post="+n),type:"wp-admin"},Object(f._x)("Low","Indication of a low quantity",'woocommerce')):V[g];return[{display:Object(_.createElement)(j.Link,{href:N,type:"wc-admin"},P),value:P},{display:y,value:y},{display:Object(w.formatValue)(s,"number",i),value:i},{display:a(l),value:c(l)},{display:Object(_.createElement)(j.Link,{href:E,type:"wc-admin"},u),value:u},{display:Object(_.createElement)("div",{className:"woocommerce-table__product-categories"},A[0]&&Object(_.createElement)(C.a,{category:A[0],categories:x}),A.length>1&&Object(_.createElement)(j.Tag,{label:Object(f.sprintf)(Object(f._x)("+%d more","categories",'woocommerce'),A.length-1),popoverContents:A.map((function(e){return Object(_.createElement)(C.a,{category:e,categories:x,key:e.id,query:r})}))})),value:A.map((function(e){return e.name})).join(", ")},{display:Object(w.formatValue)(s,"number",q.length),value:q.length},"yes"===F?{display:b?B:Object(f.__)("N/A",'woocommerce'),value:b?V[g]:null}:null,"yes"===F?{display:b?Object(w.formatValue)(s,"number",O):Object(f.__)("N/A",'woocommerce'),value:O}:null].filter(Boolean)}))}},{key:"getSummary",value:function(e){var t=e.products_count,r=void 0===t?0:t,o=e.items_sold,n=void 0===o?0:o,a=e.net_revenue,c=void 0===a?0:a,i=e.orders_count,s=void 0===i?0:i,l=this.context,u=l.formatAmount,m=(0,l.getCurrencyConfig)();return[{label:Object(f._n)("product","products",r,'woocommerce'),value:Object(w.formatValue)(m,"number",r)},{label:Object(f._n)("item sold","items sold",n,'woocommerce'),value:Object(w.formatValue)(m,"number",n)},{label:Object(f.__)("net sales",'woocommerce'),value:u(c)},{label:Object(f._n)("orders","orders",s,'woocommerce'),value:Object(w.formatValue)(m,"number",s)}]}},{key:"render",value:function(){var e=this.props,t=e.advancedFilters,r=e.baseSearchQuery,o=e.filters,n=e.hideCompare,a=e.isRequesting,c=e.query,i={helpText:Object(f.__)("Check at least two products below to compare",'woocommerce'),placeholder:Object(f.__)("Search by product name or SKU",'woocommerce')};return Object(_.createElement)(q.a,{compareBy:n?void 0:"products",endpoint:"products",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["products_count","items_sold","net_revenue","orders_count"],itemIdField:"product_id",isRequesting:a,labels:i,query:c,searchBy:"products",baseSearchQuery:r,tableQuery:{orderby:c.orderby||"items_sold",order:c.order||"desc",extended_info:!0,segmentby:c.segmentby},title:Object(f.__)("Products",'woocommerce'),columnPrefsKey:"products_report_columns",filters:o,advancedFilters:t})}}]),r}(_.Component);N.contextType=P.a,t.a=Object(y.compose)(Object(g.withSelect)((function(e,t){var r=t.query;if(t.isRequesting||r.search&&(!r.products||!r.products.length))return{};var o=e(k.ITEMS_STORE_NAME),n=o.getItems,a=o.getItemsError,c=o.isResolving,i={per_page:-1};return{categories:n("categories",i),isError:Boolean(a("categories",i)),isRequesting:c("getItems",["categories",i])}})))(N)},624:function(e,t,r){},625:function(e,t,r){"use strict";r(64);var o=r(22),n=r.n(o),a=r(23),c=r.n(a),i=r(18),s=r.n(i),l=r(24),u=r.n(l),m=r(25),d=r.n(m),p=r(14),b=r.n(p),_=r(0),f=(r(41),r(2)),y=r(5),v=r(145),g=r(50),O=r(281),h=r(85),j=r(606),w=r(614),S=r(598),k=r(600);function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=b()(e);if(t){var n=b()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return d()(this,r)}}var R=Object(h.g)("manageStock","no"),q=Object(h.g)("stockStatuses",{}),P=function(e){return Object(k.h)(e.extended_info||{})},E=function(e){u()(r,e);var t=C(r);function r(){var e;return n()(this,r),(e=t.call(this)).getHeadersContent=e.getHeadersContent.bind(s()(e)),e.getRowsContent=e.getRowsContent.bind(s()(e)),e.getSummary=e.getSummary.bind(s()(e)),e}return c()(r,[{key:"getHeadersContent",value:function(){return[{label:Object(f.__)("Product / Variation Title",'woocommerce'),key:"name",required:!0,isLeftAligned:!0},{label:Object(f.__)("SKU",'woocommerce'),key:"sku",hiddenByDefault:!0,isSortable:!0},{label:Object(f.__)("Items Sold",'woocommerce'),key:"items_sold",required:!0,defaultSort:!0,isSortable:!0,isNumeric:!0},{label:Object(f.__)("Net Sales",'woocommerce'),screenReaderLabel:Object(f.__)("Net Sales",'woocommerce'),key:"net_revenue",required:!0,isSortable:!0,isNumeric:!0},{label:Object(f.__)("Orders",'woocommerce'),key:"orders_count",isSortable:!0,isNumeric:!0},"yes"===R?{label:Object(f.__)("Status",'woocommerce'),key:"stock_status"}:null,"yes"===R?{label:Object(f.__)("Stock",'woocommerce'),key:"stock",isNumeric:!0}:null].filter(Boolean)}},{key:"getRowsContent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=this.props.query,r=Object(g.getPersistedQuery)(t),o=this.context,n=o.formatAmount,a=o.formatDecimal,c=o.getCurrencyConfig;return Object(y.map)(e,(function(e){var t=e.items_sold,o=e.net_revenue,i=e.orders_count,s=e.product_id,l=e.variation_id,u=e.extended_info||{},m=u.stock_status,d=u.stock_quantity,p=u.low_stock_amount,b=u.sku,y=P(e),j=Object(g.getNewPath)(r,"/analytics/orders",{filter:"advanced",variation_includes:l}),S=Object(h.f)("post.php?post=".concat(s,"&action=edit"));return[{display:Object(_.createElement)(v.Link,{href:S,type:"wp-admin"},y),value:y},{display:b,value:b},{display:Object(O.formatValue)(c(),"number",t),value:t},{display:n(o),value:a(o)},{display:Object(_.createElement)(v.Link,{href:j,type:"wc-admin"},i),value:i},"yes"===R?{display:Object(w.a)(m,d,p)?Object(_.createElement)(v.Link,{href:S,type:"wp-admin"},Object(f._x)("Low","Indication of a low quantity",'woocommerce')):q[m],value:q[m]}:null,"yes"===R?{display:d,value:d}:null].filter(Boolean)}))}},{key:"getSummary",value:function(e){var t=e.variations_count,r=void 0===t?0:t,o=e.items_sold,n=void 0===o?0:o,a=e.net_revenue,c=void 0===a?0:a,i=e.orders_count,s=void 0===i?0:i,l=this.context,u=l.formatAmount,m=(0,l.getCurrencyConfig)();return[{label:Object(f._n)("variation sold","variations sold",r,'woocommerce'),value:Object(O.formatValue)(m,"number",r)},{label:Object(f._n)("item sold","items sold",n,'woocommerce'),value:Object(O.formatValue)(m,"number",n)},{label:Object(f.__)("net sales",'woocommerce'),value:u(c)},{label:Object(f._n)("orders","orders",s,'woocommerce'),value:Object(O.formatValue)(m,"number",s)}]}},{key:"render",value:function(){var e=this.props,t=e.advancedFilters,r=e.baseSearchQuery,o=e.filters,n=e.isRequesting,a=e.query,c={helpText:Object(f.__)("Check at least two variations below to compare",'woocommerce'),placeholder:Object(f.__)("Search by variation name or SKU",'woocommerce')};return Object(_.createElement)(j.a,{baseSearchQuery:r,compareBy:"variations",compareParam:"filter-variations",endpoint:"variations",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,isRequesting:n,itemIdField:"variation_id",labels:c,query:a,getSummary:this.getSummary,summaryFields:["variations_count","items_sold","net_revenue","orders_count"],tableQuery:{orderby:a.orderby||"items_sold",order:a.order||"desc",extended_info:!0,products:a.products,variations:a.variations},title:Object(f.__)("Variations",'woocommerce'),columnPrefsKey:"variations_report_columns",filters:o,advancedFilters:t})}}]),r}(_.Component);E.contextType=S.a,t.a=E}}]);