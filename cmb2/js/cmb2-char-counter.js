window.CMB2=window.CMB2||{},window.CMB2.charcounter=window.CMB2.charcounter||{},function(t,n,e,r,i){"use strict";if(!wp.utils||!wp.utils.WordCounter)return r.log("Cannot find wp.utils!");i.counters={};var o=i.counters,a=new wp.utils.WordCounter;i.updateCounter=function(t){if(!o.hasOwnProperty(t))return null;var n=o[t],e=n.editor&&!n.editor.isHidden()?n.editor.getContent({format:"raw"}):r.$id(t).val().trim(),i=a.count(e,n.type),d=n.max&&i>n.max,u=n.max?n.max-i:i;return n.$el.parents(".cmb2-char-counter-wrap")[d?"addClass":"removeClass"]("cmb2-max-exceeded"),n.$el.val(u).outerWidth(8*String(u).length+15+"px"),i},i.instantiate=function(t){var n=t.data();if(!(n.fieldId in o)){var e={$el:t,max:n.max,type:"words"===n.counterType?"words":"characters_including_spaces",editor:!1};o[n.fieldId]=e,i.updateCounter(n.fieldId)}},i.initAll=function(){e(".cmb2-char-counter").each((function(){i.instantiate(e(this))}))},i.initWysiwyg=function(t,n){n.id in o&&(o[n.id].editor=n,n.on("nodechange keyup",i.countWysiwyg))},i.addRow=function(t,n){n.find(".cmb2-char-counter").each((function(){var t=e(this),n=t.attr("id").replace(/^char-counter-/,"");t.attr("data-field-id",n).data("field-id",n),i.instantiate(t)}))},i.cleanCounters=function(){var t,e=[];for(t in o)n.getElementById(t)||e.push(t);e.length&&_.each(e,(function(t){delete o[t]}))},i.countWysiwyg=_.throttle((function(t){return t.hasOwnProperty("element")?i.updateCounter(e(t.element).data("id")):t.hasOwnProperty("currentTarget")?i.updateCounter(e(t.currentTarget).data("id")):void 0})),i.countTextarea=_.throttle((function(t){i.updateCounter(t.currentTarget.id)}),400),e(n).on("cmb_init",i.initAll).on("tinymce-editor-init",i.initWysiwyg).on("cmb2_add_row",i.addRow).on("cmb2_remove_row",i.cleanCounters).on("input keyup",".cmb2-count-chars",i.countTextarea)}(window,document,jQuery,window.CMB2,window.CMB2.charcounter);