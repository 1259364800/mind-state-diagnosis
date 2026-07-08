(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const n=[{id:1,text:"周一早上闹钟响了，你：",options:[{text:"再睡一集，人生不急",scores:{lazy:3,crazy:0,emo:1,try:0}},{text:"弹射起床，又是卷的一天",scores:{lazy:0,crazy:0,emo:0,try:3}},{text:"按掉继续焦虑，睁眼躺平",scores:{lazy:2,crazy:0,emo:2,try:0}},{text:"闹钟是什么？我根本没睡",scores:{lazy:0,crazy:3,emo:2,try:0}}]},{id:2,text:"朋友约你周末出门，你：",options:[{text:"婉拒，床是我的信仰",scores:{lazy:3,crazy:0,emo:0,try:0}},{text:"盛装出席，不能输",scores:{lazy:0,crazy:1,emo:0,try:3}},{text:"去了，但全程想回家",scores:{lazy:1,crazy:0,emo:2,try:0}},{text:"临时鸽子，编个抽象理由",scores:{lazy:2,crazy:3,emo:0,try:0}}]},{id:3,text:"工作群里 @ 你，你：",options:[{text:"已读不回，装死",scores:{lazy:2,crazy:1,emo:1,try:0}},{text:"秒回「收到」",scores:{lazy:0,crazy:0,emo:0,try:3}},{text:"回一个阴阳表情包",scores:{lazy:0,crazy:3,emo:0,try:0}},{text:"紧张到反复看，不敢回",scores:{lazy:0,crazy:0,emo:3,try:1}}]},{id:4,text:"深夜刷手机，你：",options:[{text:"越刷越清醒，再刷一集",scores:{lazy:1,crazy:2,emo:1,try:0}},{text:"到点就睡，自律达人",scores:{lazy:0,crazy:0,emo:0,try:3}},{text:"点开奇怪视频，进入异次元",scores:{lazy:0,crazy:3,emo:0,try:0}},{text:"开始回忆人生，越想越 emo",scores:{lazy:0,crazy:0,emo:3,try:0}}]},{id:5,text:"看到朋友圈有人在健身，你：",options:[{text:"翻个身，继续躺",scores:{lazy:3,crazy:0,emo:0,try:0}},{text:"点赞收藏，等于练过",scores:{lazy:2,crazy:0,emo:0,try:1}},{text:"跟着练，不能落后",scores:{lazy:0,crazy:0,emo:0,try:3}},{text:"焦虑但不动，心里骂自己",scores:{lazy:1,crazy:0,emo:2,try:1}}]},{id:6,text:"外卖迟到 30 分钟，你：",options:[{text:"无所谓，继续等",scores:{lazy:3,crazy:0,emo:0,try:0}},{text:"打电话，气势汹汹",scores:{lazy:0,crazy:2,emo:1,try:2}},{text:"退款，但饿死",scores:{lazy:1,crazy:2,emo:2,try:0}},{text:"给差评小作文",scores:{lazy:0,crazy:3,emo:2,try:0}}]},{id:7,text:"有人问你「最近在忙什么」，你：",options:[{text:"活着",scores:{lazy:2,crazy:1,emo:1,try:0}},{text:"在搞大项目，其实没有",scores:{lazy:0,crazy:0,emo:1,try:2}},{text:"在发疯，显而易见",scores:{lazy:0,crazy:3,emo:1,try:0}},{text:"不知道怎么说，沉默",scores:{lazy:1,crazy:0,emo:3,try:0}}]},{id:8,text:"如果明天不上班，你第一件事：",options:[{text:"睡觉，睡到宇宙尽头",scores:{lazy:3,crazy:0,emo:0,try:0}},{text:"出去玩，报复性消费",scores:{lazy:0,crazy:2,emo:0,try:2}},{text:"刷手机，时间黑洞",scores:{lazy:2,crazy:2,emo:1,try:0}},{text:"打扫房间，然后放弃",scores:{lazy:1,crazy:1,emo:1,try:2}}]}],u={lazy:[{key:"lazy-low",label:"偶尔躺平型",emoji:"🛌",color:"#94a3b8",diagnosis:"你还能动起来，只是不想。",traits:["节能","拖延","幸存者"],advice:"累了就躺，但别忘了偶尔坐起来。"},{key:"lazy-mid",label:"低电量模式",emoji:"🪫",color:"#facc15",diagnosis:"你的身体在线，灵魂已经离线。",traits:["省电","佛系","被动"],advice:"允许自己休息，但不要休息到关机。"},{key:"lazy-high",label:"确诊为床",emoji:"🛏️",color:"#a78bfa",diagnosis:"你和床的羁绊，比任何感情都深。",traits:["躺平","摆烂","舒适区居民"],advice:"世界不会因为你的缺席而停止，但它也不会因为你而更好。"}],try:[{key:"try-low",label:"间歇性努力型",emoji:"⏳",color:"#38bdf8",diagnosis:"你会努力，但持续不了三天。",traits:["flag","三分钟","重启中"],advice:"把目标切成小片，小到自己都不好意思放弃。"},{key:"try-mid",label:"认真卷过型",emoji:"🏃",color:"#4ade80",diagnosis:"你认真过，但世界没给你掌声。",traits:["自律","焦虑","KPI 人"],advice:"别用别人的节奏丈量自己。"},{key:"try-high",label:"永动机型",emoji:"🔋",color:"#f472b6",diagnosis:"你在卷，但不知道是不是在卷自己。",traits:["卷王","高效","潜在 burnout"],advice:"休息一下不算输，机器也需要保养。"}],crazy:[{key:"crazy-low",label:"抽象预备役",emoji:"🎭",color:"#fb923c",diagnosis:"你偶尔抽象，但还在可控范围。",traits:["玩梗","反差","潜在社恐"],advice:"继续观察，抽象是天赋。"},{key:"crazy-mid",label:"行为艺术型",emoji:"🎨",color:"#f87171",diagnosis:"你的生活本身就是一场行为艺术。",traits:["发疯","无厘头","梗王"],advice:"继续保持，但别吓到身边的人。"},{key:"crazy-high",label:"超现实主义存在",emoji:"🌀",color:"#FF00A0",diagnosis:"你的世界没有逻辑，只有情绪。",traits:["抽象","不可预测","互联网精神"],advice:"你不需要被理解，你只需要被截图。"}],emo:[{key:"emo-low",label:"表面稳定型",emoji:"😐",color:"#cbd5e1",diagnosis:"你看起来正常，只是在硬撑。",traits:["内敛","敏感","观察者"],advice:"偶尔让别人知道你在想什么。"},{key:"emo-mid",label:"深夜 emo 型",emoji:"🌙",color:"#818cf8",diagnosis:"白天的你没事，晚上十二点开始想人生。",traits:["夜行","回忆","情绪周期"],advice:"少听慢歌，早点睡。"},{key:"emo-high",label:"确诊为活人",emoji:"🌧️",color:"#60a5fa",diagnosis:"你感受一切，包括那些没必要的。",traits:["高敏","内耗","共情过载"],advice:"不是所有人所有事都需要你理解。"}]};function v(t){const o=Object.keys(t).reduce((e,s)=>t[e]>t[s]?e:s),a=Object.values(t).reduce((e,s)=>e+s,0),r=a<=8?0:a<=14?1:2;return u[o][r]}function z(t){return["轻度","中度","重度"][t]??"未知"}let c=0;const l={lazy:0,try:0,crazy:0,emo:0},d=document.getElementById("app");function y(){d.innerHTML=`
    <div class="screen intro-screen">
      <div class="glitch-title" data-text="精神状态诊断器">精神状态诊断器</div>
      <div class="subtitle">8 道题，测测你现在的精神状态</div>
      <button class="btn-start" id="btn-start">开始诊断</button>
      <div class="footer">8 道题 · 看看你的精神状态</div>
    </div>
  `,document.getElementById("btn-start").addEventListener("click",m)}function m(){const t=n[c];d.innerHTML=`
    <div class="screen question-screen">
      <div class="progress">
        <div class="progress-bar" style="width: ${c/n.length*100}%"></div>
      </div>
      <div class="question-number">问题 ${c+1} / ${n.length}</div>
      <div class="question-text">${t.text}</div>
      <div class="options">
        ${t.options.map((o,a)=>`
          <button class="option-btn" data-idx="${a}">
            <span class="option-label">${String.fromCharCode(65+a)}</span>
            <span class="option-text">${o.text}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `,document.querySelectorAll(".option-btn").forEach(o=>{o.addEventListener("click",a=>{const r=Number(a.currentTarget.dataset.idx),e=t.options[r];Object.entries(e.scores).forEach(([s,i])=>{l[s]+=i}),c++,c>=n.length?b():m()})})}function b(){d.innerHTML=`
    <div class="screen loading-screen">
      <div class="spinner"></div>
      <div class="loading-text">正在连接你的大脑...</div>
    </div>
  `,setTimeout(p,800)}function p(){const t=v(l),o=Object.values(l).reduce((r,e)=>r+e,0),a=z(o<=8?0:o<=14?1:2);d.innerHTML=`
    <div class="screen result-screen">
      <div class="result-card" id="result-card">
        <div class="card-header">
          <span class="card-label">精神状态诊断报告</span>
          <span class="card-level">${a}</span>
        </div>
        <div class="card-emoji">${t.emoji}</div>
        <div class="card-type" style="color: ${t.color}">${t.label}</div>
        <div class="card-diagnosis">${t.diagnosis}</div>
        <div class="card-traits">
          ${t.traits.map(r=>`<span class="trait">${r}</span>`).join("")}
        </div>
        <div class="card-advice">
          <span class="advice-label">建议</span>
          ${t.advice}
        </div>
      </div>
      <div class="result-actions">
        <button class="btn-share" id="btn-share">📤 分享结果</button>
        <button class="btn-retry" id="btn-retry">再测一次</button>
      </div>
    </div>
  `,document.getElementById("btn-retry").addEventListener("click",()=>{c=0,Object.keys(l).forEach(r=>l[r]=0),y()}),document.getElementById("btn-share").addEventListener("click",()=>{if(navigator.share)navigator.share({title:"精神状态诊断器",text:`我测出来是「${t.label}」，你呢？`,url:location.href}).catch(()=>{});else{navigator.clipboard.writeText(`我测出来是「${t.label}」—— 精神状态诊断器 ${location.href}`);const r=document.getElementById("btn-share"),e=r.textContent;r.textContent="已复制到剪贴板",setTimeout(()=>r.textContent=e,1500)}})}y();
