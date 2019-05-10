export function setup(helper) {
  if (!helper.markdownIt) { return; }

  helper.whiteList(["div.disabledcopy"]);

  helper.registerPlugin(md => {
    md.inline.bbcode.ruler.push("blockcopy",{
      tag: "blockcopy",

      replace: function(state, tagInfo, content) {
        const token = state.push("html_raw", '', 0);
        const escaped = state.md.utils.escapeHtml(content);
        token.content = `<div class="disabledcopy" oncopy="return false" onpaste="return false" style="-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;">\n${escaped}\n</div>\n`;
        return true;
      }
    });
  });
}
