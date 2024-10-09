document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById('content');
    const text = content.innerHTML;
    
    // 替换自定义的 [sp][/sp] 标签
    const newText = text.replace(/\[sp\](.*?)\[\/sp\]/g, '<span class="spoiler">$1</span>');
    content.innerHTML = newText;
});
