$(document).ready(function(){var shortcuts_enabled=true;$("input,textarea,select").live("focus",function(){shortcuts_enabled=false});$("input,textarea,select").live("blur",function(){shortcuts_enabled=true});if($(".shortcuts_items").size()){var shortcuts_items=$(".shortcuts_items .shortcuts_item");$(window).scroll(function(){var active_start_position=window.pageYOffset+0;var active_end_position=window.pageYOffset+50;shortcuts_items.each(function(index,item){var shortcuts_item=$(item);var shortcuts_item_position=shortcuts_item.offset().top+20;if(active_start_position<shortcuts_item_position&&shortcuts_item_position<active_end_position){if(shortcuts_item.hasClass("focus")){}else{$(".shortcuts_items .shortcuts_item.focus").removeClass("focus");shortcuts_item.addClass("focus")}}})})}var hotkey_events={"/":"shortcuts.focus_to_search","alt+left":"shortcuts.to_prev_page","alt+right":"shortcuts.to_next_page",h:"shortcuts.to_first_post",l:"shortcuts.to_last_post",j:"shortcuts.to_next_post",k:"shortcuts.to_prev_post",o:"shortcuts.open_post"};var hotkey_events_on_post={c:"shortcuts.to_comment_form",t:"shortcuts.add_to_tracker",m:"shortcuts.subscribe_comments",r:"shortcuts.refresh_comments",f:"shortcuts.to_next_unreaded_comment",j:"shortcuts.to_next_new_comment",k:"shortcuts.to_prev_new_comment",esc:"shortcuts.escape"};function bindKeyEvent(hotkey,event_name){$(document).bind("keydown",hotkey,function(){if(shortcuts_enabled){$(document).trigger(event_name);return false}})}$.each(hotkey_events,bindKeyEvent);$.each(hotkey_events_on_post,bindKeyEvent);$("input, textarea").bind("keydown","alt+return ctrl+return",function(){var form=$(this).parents("form");$(document).trigger("shortcuts.submit_form",form);return false});$(document).bind("shortcuts.escape",function(event,form){$("#navbar_overlay").trigger("click")});$(document).bind("shortcuts.subscribe_comments",function(event,form){$("#subscribe_comments").trigger("click")});$(document).bind("shortcuts.add_to_tracker",function(event,form){$("#tracker_comments").trigger("click")});$(document).bind("shortcuts.focus_to_search",function(event,form){$(".nav_panel .tab_menu").click();$('.global_search_form input[name="q"]').focus()});$(document).bind("shortcuts.submit_form",function(event,form){$('input[type="submit"],input.submit,input.edit',form).each(function(index,button){if($(button).hasClass("hidden")){}else{button.click()}})});$(document).bind("shortcuts.to_next_page",function(){var url=$("#next_page").attr("href");if(typeof url!=="undefined"){document.location.href=url}});$(document).bind("shortcuts.to_prev_page",function(){var url=$("#previous_page").attr("href");if(typeof url!=="undefined"){document.location.href=url}});$(document).bind("shortcuts.to_first_post",function(){var shortcuts_items=$(".shortcuts_items");if(shortcuts_items.size()){if($(".shortcuts_item",shortcuts_items).first().hasClass("focus")){$(document).trigger("shortcuts.to_prev_page")}else{$(".shortcuts_item.focus",shortcuts_items).removeClass("focus");$(".shortcuts_item",shortcuts_items).first().addClass("focus")}$.scrollTo($(".shortcuts_item.focus",shortcuts_items),200,{axis:"y"})}});$(document).bind("shortcuts.to_last_post",function(){var shortcuts_items=$(".shortcuts_items");if(shortcuts_items.size()){if($(".shortcuts_item",shortcuts_items).last().hasClass("focus")){$(document).trigger("shortcuts.to_next_page")}else{$(".shortcuts_item.focus",shortcuts_items).removeClass("focus");$(".shortcuts_item",shortcuts_items).last().addClass("focus")}$.scrollTo($(".shortcuts_item.focus",shortcuts_items),200,{axis:"y"})}});$(document).bind("shortcuts.to_next_post",function(){var shortcuts_items=$(".shortcuts_items");if(shortcuts_items.size()){if($(".shortcuts_item.focus",shortcuts_items).size()==0){$(".shortcuts_item",shortcuts_items).first().addClass("focus")}else{var shortcuts_item=$(".shortcuts_item.focus",shortcuts_items);var next_shortcuts_item=shortcuts_item.next();if(next_shortcuts_item.size()==0){$(document).trigger("shortcuts.to_next_page")}else{shortcuts_item.removeClass("focus");next_shortcuts_item.addClass("focus")}}$.scrollTo($(".shortcuts_item.focus",shortcuts_items),200,{axis:"y"})}});$(document).bind("shortcuts.to_prev_post",function(){var shortcuts_items=$(".shortcuts_items");if(shortcuts_items.size()){if($(".shortcuts_item.focus",shortcuts_items).size()==0){$(".shortcuts_item",shortcuts_items).last().addClass("focus")}else{var shortcuts_item=$(".shortcuts_item.focus",shortcuts_items);var prev_shortcuts_item=shortcuts_item.prev();if(prev_shortcuts_item.size()==0){$(document).trigger("shortcuts.to_prev_page")}else{shortcuts_item.removeClass("focus");prev_shortcuts_item.addClass("focus")}}$.scrollTo($(".shortcuts_item.focus",shortcuts_items),200,{axis:"y"})}});$(document).bind("shortcuts.open_post",function(){if($(".shortcuts_items").size()){var url=$(".shortcuts_items .shortcuts_item.focus .post_title").attr("href");if(url)document.location.href=url}});$(document).bind("shortcuts.to_comment_form",function(){if($("#comments_form_placeholder").size()){$.scrollTo($("#comments_form_placeholder"),200,{axis:"y"});$("#comment_text").focus()}});$(document).bind("shortcuts.refresh_comments",function(){if(g_show_xpanel){$("#xpanel .refresh").trigger("click")}});$(document).bind("shortcuts.to_next_unreaded_comment",function(){if(g_show_xpanel){$("#xpanel .new").trigger("click")}});$(document).bind("shortcuts.to_next_new_comment",function(){if(g_show_xpanel){$("#xpanel .next_new").trigger("click")}});$(document).bind("shortcuts.to_prev_new_comment",function(){if(g_show_xpanel){$("#xpanel .prev_new").trigger("click")}})});