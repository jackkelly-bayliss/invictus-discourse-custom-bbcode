export function setup(helper) {
  if (!helper.markdownIt) { return; }

  helper.whiteList(["div.disabledcopy"]);

  helper.registerPlugin(md => {
    md.inline.bbcode.ruler.push("blockcopy",{
      tag: "blockcopy",

      replace: function(state, tagInfo, content) {
        const token = state.push("html_raw", '', 0);
        const escaped = state.md.utils.escapeHtml(content);
        token.content = `<div class="disabledcopy" oncopy="return false" onpaste="return false">\n${escaped}\n</div>\n`;
        return true;
      }
    });
  });
}
