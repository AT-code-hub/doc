import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,a as r}from"./app.9d91b877.js";const s={},i=r(`<h1 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h1><h1 id="error-you-have-not-concluded-your-merge-merge-head-exists" tabindex="-1"><a class="header-anchor" href="#error-you-have-not-concluded-your-merge-merge-head-exists" aria-hidden="true">#</a> error: You have not concluded your merge (MERGE_HEAD exists)</h1><p>原因：在以前pull下来的代码自动合并失败</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment">#保留本地更改,中止合并</span>
git merge --abort
<span class="token comment">#重新合并</span>
git reset --merge
<span class="token comment">#重新拉取</span>
git pull # git pull = git fetch + git merge

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[i];function d(c,o){return n(),a("div",null,t)}const u=e(s,[["render",d],["__file","常见问题.html.vue"]]);export{u as default};
