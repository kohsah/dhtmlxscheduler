/*
This software is allowed to use under GPL or you need to obtain Commercial or Enterise License
to use it in not GPL project. Please contact sales@dhtmlx.com for details
*/
scheduler.form_blocks.combo={render:function(a){var d="";d+="<div class='"+a.type+"' style='height:"+(a.height||20)+"px;' ></div>";return d},set_value:function(a,d,c,b){a._combo&&a._combo.destructor();window.dhx_globalImgPath=b.image_path||"/";a._combo=new dhtmlXCombo(a,b.name,a.offsetWidth-8);a._combo.enableFilteringMode(!!b.filtering,b.script_path||null,!!b.cache);if(b.script_path)a._combo.setComboValue(c[b.map_to]||null);else{for(var f=[],e=0;e<b.options.length;e++){var g=[];g.push(b.options[e].key);
g.push(b.options[e].label);f.push(g)}a._combo.addOption(f);if(c[b.map_to]){var h=a._combo.getIndexByValue(c[b.map_to]);a._combo.selectOption(h)}}},get_value:function(a){var d=a._combo.getSelectedValue();return d},focus:function(){}};
scheduler.form_blocks.radio={render:function(a){var d="";d+="<div class='dhx_cal_ltext dhx_cal_radio' style='height:"+a.height+"px;' >";for(var c=0;c<a.options.length;c++){var b=scheduler.uid();d+="<input id='"+b+"' type='radio' name='"+a.name+"' value='"+a.options[c].key+"'><label for='"+b+"'> "+a.options[c].label+"</label>";a.vertical&&(d+="<br/>")}d+="</div>";return d},set_value:function(a,d,c,b){for(var f=a.getElementsByTagName("input"),e=0;e<f.length;e++)if(f[e].checked=!1,f[e].value==c[b.map_to])f[e].checked=
!0},get_value:function(a){for(var d=a.getElementsByTagName("input"),c=0;c<d.length;c++)if(d[c].checked)return d[c].value},focus:function(){}};
scheduler.form_blocks.checkbox={render:function(){return scheduler.config.wide_form?'<div class="dhx_cal_wide_checkbox"></div>':""},set_value:function(a,d,c,b){var a=document.getElementById(b.id),f=scheduler.uid(),e=!1;typeof b.checked_value!="undefined"&&c[b.map_to]==b.checked_value&&(e=!0);a.className+=" dhx_cal_checkbox";var g="<input id='"+f+"' type='checkbox' value='true' name='"+b.name+"'"+(e?"checked='true'":"")+"'>",h="<label for='"+f+"'>"+(scheduler.locale.labels["section_"+b.name]||b.name)+
"</label>";scheduler.config.wide_form?(a.innerHTML=h,a.nextSibling.innerHTML=g):a.innerHTML=g+h},get_value:function(a,d,c){var a=document.getElementById(c.id),b=a.getElementsByTagName("input")[0];b||(b=a.nextSibling.getElementsByTagName("input")[0]);return b.checked?c.checked_value||!0:c.unchecked_value||!1},focus:function(){}};
