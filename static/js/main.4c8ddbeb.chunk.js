(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){e.exports={page_container:"Home_page_container__htocD",home_container:"Home_home_container__oAqy2",home_logo:"Home_home_logo__dTqSs",search_bar:"Home_search_bar__1NtaU",search_icon:"Home_search_icon__1n1gC",search_button:"Home_search_button__jue5F"}},13:function(e,a,t){e.exports={navbar_logo:"Navbar_navbar_logo__Nzaf5",navbar:"Navbar_navbar__2sbOB",search_bar_container:"Navbar_search_bar_container__2UMpu",search_bar:"Navbar_search_bar__3CjZW",search_icon:"Navbar_search_icon__18PFg",search_button:"Navbar_search_button__n1btT"}},14:function(e,a,t){e.exports={page_container:"Abilitydetails_page_container__3NEhG",ability_container:"Abilitydetails_ability_container__3-IX2",all_pokemon_container:"Abilitydetails_all_pokemon_container__31oDC",pokemon_container:"Abilitydetails_pokemon_container__15tP5",pokemon_title:"Abilitydetails_pokemon_title__1bV3U"}},2:function(e,a,t){e.exports={page_container:"Pokemondetails_page_container__3R_P8",rows:"Pokemondetails_rows__3p1s6",misc_details:"Pokemondetails_misc_details__16BcI",headings:"Pokemondetails_headings__-_nYQ",misc_value:"Pokemondetails_misc_value__3kL1J",misc_value_group:"Pokemondetails_misc_value_group__mFK0x",main_details:"Pokemondetails_main_details__3WfI8",pokemon_number:"Pokemondetails_pokemon_number__2UMLg",pokemon_img:"Pokemondetails_pokemon_img__15iyo",pokemon_name:"Pokemondetails_pokemon_name__2QQPL",pokemon_types:"Pokemondetails_pokemon_types__16OXi",pokemon_abilities:"Pokemondetails_pokemon_abilities__1e2ou",single_ability:"Pokemondetails_single_ability__xNGZK",outer_stats_container:"Pokemondetails_outer_stats_container__Pb9Q0",stats_container:"Pokemondetails_stats_container__3ivaw",stat_row:"Pokemondetails_stat_row__28qWS",stat_labels:"Pokemondetails_stat_labels__3Q8i4",stat_values:"Pokemondetails_stat_values__3mv4f",stat_bars:"Pokemondetails_stat_bars__1oWm8",previous_next_row:"Pokemondetails_previous_next_row__297GZ",previous_button:"Pokemondetails_previous_button__I6nUe",button_headings:"Pokemondetails_button_headings__2H0HE",next_button:"Pokemondetails_next_button__sRA8T",arrow_icons:"Pokemondetails_arrow_icons__CIA1Z",outer_evolution_container:"Pokemondetails_outer_evolution_container__GYfKS",inner_evolution_container:"Pokemondetails_inner_evolution_container__2HRb5",evolution_column:"Pokemondetails_evolution_column__5yy_J",evolution_stage:"Pokemondetails_evolution_stage__3SepD",evolution_name:"Pokemondetails_evolution_name__ZgrOu",evolution:"Pokemondetails_evolution__4S1Wm",no_evolve:"Pokemondetails_no_evolve__AG7_w"}},21:function(e,a,t){e.exports=t.p+"static/media/logo.639198a6.png"},23:function(e,a,t){e.exports=t(39)},31:function(e,a,t){},32:function(e,a,t){e.exports={main_page:"App_main_page__W9ANw",search_box:"App_search_box__QEgY5"}},39:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),l=t(22),i=t.n(l),o=(t(31),t(32),t(12)),c=t.n(o),r=t(3),_=t(11),m=t(9);var p=function(){const[e,a]=Object(s.useState)(""),l=Object(r.o)();function i(){console.log(window.location.href.split("/")[window.location.href.split("/").length-1]),"searchResults"==window.location.href.split("/")[window.location.href.split("/").length-1]&&window.location.reload(),l("/searchResults",{state:{searchTerm:e}})}return n.a.createElement("div",{id:c.a.page_container},n.a.createElement("div",{id:c.a.home_container},n.a.createElement("h1",null,"Welcome to the"),n.a.createElement("img",{id:c.a.home_logo,src:t(21)}),n.a.createElement("input",{type:"text",id:c.a.search_bar,onChange:function(e){a(e.target.value)},onKeyPress:e=>{"Enter"===e.key&&i()}}),n.a.createElement("button",{id:c.a.search_button,onClick:i},n.a.createElement(_.a,{id:c.a.search_icon,icon:m.b}))))},d=t(13),u=t.n(d);var h=function(){const[e,a]=Object(s.useState)(""),l=Object(r.o)();function i(){console.log(window.location.href.split("/")[window.location.href.split("/").length-1]),"searchResults"==window.location.href.split("/")[window.location.href.split("/").length-1]&&window.location.reload(),l("/searchResults",{state:{searchTerm:e}})}return n.a.createElement("div",{id:u.a.navbar},n.a.createElement("img",{id:u.a.navbar_logo,src:t(21),onClick:function(){l("/")}}),n.a.createElement("div",{id:u.a.search_bar_container},n.a.createElement("input",{type:"text",id:u.a.search_bar,onChange:function(e){a(e.target.value)},onKeyPress:e=>{"Enter"===e.key&&i()}}),n.a.createElement("button",{id:u.a.search_button,onClick:i},n.a.createElement(_.a,{id:u.a.search_icon,icon:m.b}))))},E=t(40),b=t(7),v=t.n(b);var g=function(){const[e,a]=Object(s.useState)(""),[t,l]=Object(s.useState)(""),[i,o]=Object(s.useState)(""),[c,_]=Object(s.useState)(""),[m,p]=Object(s.useState)(""),{state:d}=Object(r.m)();return Object(r.o)(),Object(s.useEffect)(()=>{E.a.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").then(e=>{o(e.data.count);for(let a=0;a<i;a++)e.data.results[a].name.slice(0,d.searchTerm.length).toLowerCase()==d.searchTerm&&E.a.get("https://pokeapi.co/api/v2/pokemon/"+e.data.results[a].name).then(e=>{if(e.data.id<1e4){const s=e.data.name[0].toUpperCase()+e.data.name.slice(1),i=e.data.sprites.front_default,o=e.data.id;var a=[];for(let t=0;t<e.data.abilities.length;t++)a.push(n.a.createElement("p",null,e.data.abilities[t].ability.name[0].toUpperCase()+e.data.abilities[t].ability.name.slice(1)));const c={normal:"#A8A77A",fire:"#EE8130",water:"#6390F0",electric:"#F7D02C",grass:"#7AC74C",ice:"#96D9D6",fighting:"#C22E28",poison:"#A33EA1",ground:"#E2BF65",flying:"#A98FF3",psychic:"#F95587",bug:"#A6B91A",rock:"#B6A136",ghost:"#735797",dragon:"#6F35FC",dark:"#705746",steel:"#B7B7CE",fairy:"#D685AD"};var t=[];for(let a=0;a<e.data.types.length;a++)t.push(n.a.createElement("div",{style:{background:c[e.data.types[a].type.name]}},e.data.types[a].type.name[0].toUpperCase()+e.data.types[a].type.name.slice(1)));const r="#/pokemonDetails/"+o;l(e=>[...e,n.a.createElement("a",{href:r},n.a.createElement("div",{id:v.a.info_container},n.a.createElement("p",{id:v.a.pokemon_number},"No. ",o),n.a.createElement("img",{src:i}),n.a.createElement("div",{id:v.a.pokemon_name},n.a.createElement("p",null,s)),n.a.createElement("div",{id:v.a.pokemon_types},t),n.a.createElement("div",{id:v.a.pokemon_abilities},a)))])}})})},[i]),Object(s.useEffect)(()=>{E.a.get("https://pokeapi.co/api/v2/ability?limit=100000&offset=0").then(e=>{p(e.data.count);for(let a=0;a<m;a++)e.data.results[a].name.slice(0,d.searchTerm.length).toLowerCase()==d.searchTerm&&E.a.get("https://pokeapi.co/api/v2/ability/"+e.data.results[a].name).then(e=>{if(e.data.id<1e4){const t=e.data.name[0].toUpperCase()+e.data.name.slice(1);var a="";let s=0;if(0==e.data.effect_entries.length)a="This ability does not yet have a description.";else for(;;){if("en"==e.data.effect_entries[s].language.name){a=e.data.effect_entries[s].short_effect;break}s++}const l="#/abilityDetails/"+e.data.id;_(e=>[...e,n.a.createElement("a",{href:l},n.a.createElement("div",{id:v.a.info_container},n.a.createElement("p",{id:v.a.ability_name},t),n.a.createElement("p",{id:v.a.ability_description},a)))])}})})},[m]),n.a.createElement("div",{id:v.a.full_page},n.a.createElement("div",{id:v.a.search_results},n.a.createElement("div",{class:v.a.results_section},n.a.createElement("h1",{class:v.a.search_title},"Pokemon Results:"),t),n.a.createElement("div",{class:v.a.results_section},n.a.createElement("h1",{class:v.a.search_title},"Ability Results:"),c)))},k=t(2),f=t.n(k),w=t(18);var y=function(){const{id:e}=Object(r.q)(),[a,t]=Object(s.useState)(""),[l,i]=Object(s.useState)(""),[o,c]=Object(s.useState)(""),[p,d]=Object(s.useState)(""),[u,h]=Object(s.useState)(""),[b,v]=Object(s.useState)(""),g=Object(r.o)(),k=Object(w.useMediaQuery)({query:"(orientation: portrait)"});return Object(s.useEffect)(()=>{E.a.get("https://pokeapi.co/api/v2/pokemon/"+e).then(async a=>{const s=a.data.height,l=a.data.weight,o=a.data.base_experience,r=await E.a.get("https://pokeapi.co/api/v2/pokemon-species/"+e),p=r.data.base_happiness,u=r.data.capture_rate,b=r.data.growth_rate.name[0].toUpperCase()+r.data.growth_rate.name.slice(1),w=await E.a.get(r.data.evolution_chain.url);var y=[];if(0==a.data.held_items.length)y.push(n.a.createElement("p",null,"None"));else for(let e=0;e<a.data.held_items.length;e++)y.push(n.a.createElement("p",{class:f.a.misc_value_group},a.data.held_items[e].item.name[0].toUpperCase()+a.data.held_items[e].item.name.slice(1)));var P=[];for(let e=0;e<r.data.egg_groups.length;e++)P.push(n.a.createElement("p",{class:f.a.misc_value_group},r.data.egg_groups[e].name[0].toUpperCase()+r.data.egg_groups[e].name.slice(1)));const A=a.data.name[0].toUpperCase()+a.data.name.slice(1),C=a.data.sprites.other["official-artwork"].front_default,S=a.data.id,O=a.data.stats[0].base_stat,j=a.data.stats[1].base_stat,D=a.data.stats[2].base_stat,x=a.data.stats[3].base_stat,F=a.data.stats[4].base_stat,I=a.data.stats[5].base_stat,U=O+j+D+x+F+I;c(e=>[...e,n.a.createElement("div",{id:f.a.misc_details},n.a.createElement("h1",null,"Game Info:"),n.a.createElement("div",{class:f.a.misc_value},n.a.createElement("p",{class:f.a.headings},"Height: "),n.a.createElement("p",null,s/10,"m")),n.a.createElement("div",{class:f.a.misc_value},n.a.createElement("p",{class:f.a.headings},"Weight: "),n.a.createElement("p",null,l/10,"kg")),n.a.createElement("div",{class:f.a.misc_value},n.a.createElement("p",{class:f.a.headings},"Base Exp: "),n.a.createElement("p",null,o)),n.a.createElement("div",{class:f.a.misc_value},n.a.createElement("p",{class:f.a.headings},"Base Happiness: "),n.a.createElement("p",null,p)),n.a.createElement("div",{class:f.a.misc_value},n.a.createElement("p",{class:f.a.headings},"Capture Rate: "),n.a.createElement("p",null,u)),n.a.createElement("div",{class:f.a.misc_value},n.a.createElement("p",{class:f.a.headings},"Growth Rate: "),n.a.createElement("p",null,b)),n.a.createElement("div",{class:f.a.misc_value},n.a.createElement("p",{class:f.a.headings},"Egg Groups: "),P),n.a.createElement("div",{class:f.a.misc_value},n.a.createElement("p",{class:f.a.headings},"Held Items: "),y))]);var B=[];for(let e=0;e<a.data.abilities.length;e++){let t="#/abilityDetails/"+a.data.abilities[e].ability.url.split("ability/")[1].slice(0,a.data.abilities[e].ability.url.split("ability/")[1].length-1);B.push(n.a.createElement("a",{href:t},n.a.createElement("p",{id:f.a.single_ability},a.data.abilities[e].ability.name[0].toUpperCase()+a.data.abilities[e].ability.name.slice(1))))}const T={normal:"#A8A77A",fire:"#EE8130",water:"#6390F0",electric:"#F7D02C",grass:"#7AC74C",ice:"#96D9D6",fighting:"#C22E28",poison:"#A33EA1",ground:"#E2BF65",flying:"#A98FF3",psychic:"#F95587",bug:"#A6B91A",rock:"#B6A136",ghost:"#735797",dragon:"#6F35FC",dark:"#705746",steel:"#B7B7CE",fairy:"#D685AD"};var N=[];for(let e=0;e<a.data.types.length;e++)N.push(n.a.createElement("div",{style:{background:T[a.data.types[e].type.name]}},a.data.types[e].type.name[0].toUpperCase()+a.data.types[e].type.name.slice(1)));function H(e){return e<60?"#db4242":e>=60&&e<90?"#e38034":e>=90&&e<120?"#2eb03b":e>=120?"#77b9db":void 0}function R(){g("/searchResults")}t(e=>[...e,n.a.createElement("div",{id:f.a.main_details},n.a.createElement("p",{id:f.a.pokemon_name},n.a.createElement("h1",null,A)),n.a.createElement("img",{id:f.a.pokemon_img,src:C}),n.a.createElement("div",{id:f.a.pokemon_number},n.a.createElement("p",null,"No. ",S)),n.a.createElement("div",{id:f.a.pokemon_types},n.a.createElement("p",{class:f.a.headings},"Type: "),N),n.a.createElement("div",{id:f.a.pokemon_abilities},n.a.createElement("p",{class:f.a.headings},"Abilities:"),B))]),i(k?e=>[...e,n.a.createElement("div",{id:f.a.outer_stats_container},n.a.createElement("h1",null,"Base Stats:"),n.a.createElement("div",{id:f.a.stats_container},n.a.createElement("div",{class:f.a.stat_row},n.a.createElement("p",{class:f.a.stat_labels},"HP:"),n.a.createElement("p",{class:f.a.stat_values},O),n.a.createElement("div",{class:f.a.stat_bars,style:{width:O/3+"vw",background:H(O)}})),n.a.createElement("div",{class:f.a.stat_row},n.a.createElement("p",{class:f.a.stat_labels},"Attack: "),n.a.createElement("p",{class:f.a.stat_values},j),n.a.createElement("div",{class:f.a.stat_bars,style:{width:j/3+"vw",background:H(j)}})),n.a.createElement("div",{class:f.a.stat_row},n.a.createElement("p",{class:f.a.stat_labels},"Defense: "),n.a.createElement("p",{class:f.a.stat_values},D),n.a.createElement("div",{class:f.a.stat_bars,style:{width:D/3+"vw",background:H(D)}})),n.a.createElement("div",{class:f.a.stat_row},n.a.createElement("p",{class:f.a.stat_labels},"Sp. Atk: "),n.a.createElement("p",{class:f.a.stat_values},x),n.a.createElement("div",{class:f.a.stat_bars,style:{width:x/3+"vw",background:H(x)}})),n.a.createElement("div",{class:f.a.stat_row},n.a.createElement("p",{class:f.a.stat_labels},"Sp. Def: "),n.a.createElement("p",{class:f.a.stat_values},F),n.a.createElement("div",{class:f.a.stat_bars,style:{width:F/3+"vw",background:H(F)}})),n.a.createElement("div",{class:f.a.stat_row},n.a.createElement("p",{class:f.a.stat_labels},"Speed: "),n.a.createElement("p",{class:f.a.stat_values},I),n.a.createElement("div",{class:f.a.stat_bars,style:{width:I/3+"vw",background:H(I)}})),n.a.createElement("div",{class:f.a.stat_row},n.a.createElement("p",{class:f.a.stat_labels},"Total: "),n.a.createElement("p",{class:f.a.stat_values},U))))]:e=>[...e,n.a.createElement("div",{id:f.a.outer_stats_container},n.a.createElement("h1",null,"Base Stats:"),n.a.createElement("div",{id:f.a.stats_container},n.a.createElement("div",{class:f.a.stat_row},n.a.createElement("p",{class:f.a.stat_labels},"HP:"),n.a.createElement("p",{class:f.a.stat_values},O),n.a.createElement("div",{class:f.a.stat_bars,style:{width:O/7+"vw",background:H(O)}})),n.a.createElement("div",{class:f.a.stat_row},n.a.createElement("p",{class:f.a.stat_labels},"Attack: "),n.a.createElement("p",{class:f.a.stat_values},j),n.a.createElement("div",{class:f.a.stat_bars,style:{width:j/7+"vw",background:H(j)}})),n.a.createElement("div",{class:f.a.stat_row},n.a.createElement("p",{class:f.a.stat_labels},"Defense: "),n.a.createElement("p",{class:f.a.stat_values},D),n.a.createElement("div",{class:f.a.stat_bars,style:{width:D/7+"vw",background:H(D)}})),n.a.createElement("div",{class:f.a.stat_row},n.a.createElement("p",{class:f.a.stat_labels},"Sp. Atk: "),n.a.createElement("p",{class:f.a.stat_values},x),n.a.createElement("div",{class:f.a.stat_bars,style:{width:x/7+"vw",background:H(x)}})),n.a.createElement("div",{class:f.a.stat_row},n.a.createElement("p",{class:f.a.stat_labels},"Sp. Def: "),n.a.createElement("p",{class:f.a.stat_values},F),n.a.createElement("div",{class:f.a.stat_bars,style:{width:F/7+"vw",background:H(F)}})),n.a.createElement("div",{class:f.a.stat_row},n.a.createElement("p",{class:f.a.stat_labels},"Speed: "),n.a.createElement("p",{class:f.a.stat_values},I),n.a.createElement("div",{class:f.a.stat_bars,style:{width:I/7+"vw",background:H(I)}})),n.a.createElement("div",{class:f.a.stat_row},n.a.createElement("p",{class:f.a.stat_labels},"Total: "),n.a.createElement("p",{class:f.a.stat_values},U))))]);let G=[[],[],[]];if(function e(a,t){let s=t.species.name[0].toUpperCase()+t.species.name.slice(1),l="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"+t.species.url.split("pokemon-species")[1].slice(0,t.species.url.split("pokemon-species")[1].length-1)+".png",i="#/pokemonDetails/"+t.species.url.split("pokemon-species")[1].slice(1,t.species.url.split("pokemon-species")[1].length-1);G[a].push(n.a.createElement("a",{href:i},n.a.createElement("div",{id:f.a.evolution_stage,onClick:R},n.a.createElement("img",{src:l}),n.a.createElement("p",{id:f.a.evolution_name},s))));for(let n=0;n<t.evolves_to.length;n++)e(a+1,t.evolves_to[n])}(0,w.data.chain),0!=G[1].length)for(let e=0;e<G.length&&0!=G[e].length;e++)0!=e&&v(e=>[...e,n.a.createElement(_.a,{class:f.a.arrow_icons,icon:m.c})]),v(a=>[...a,n.a.createElement("div",{id:f.a.evolution_column},G[e])]);else v(e=>[...e,n.a.createElement("p",{id:f.a.no_evolve},"This Pok\xe9mon does not evolve.")]);console.log(G);const L=await E.a.get("https://pokeapi.co/api/v2/pokemon/"+(parseInt(e)-1)),Q="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(parseInt(e)-1)+".png",W=L.data.name[0].toUpperCase()+L.data.name.slice(1),q="#/pokemonDetails/"+(parseInt(S)-1);d(e=>[...e,n.a.createElement("a",{href:q},n.a.createElement("div",{id:f.a.previous_button,onClick:R},n.a.createElement("img",{src:Q}),n.a.createElement("p",{class:f.a.button_headings},W),n.a.createElement(_.a,{class:f.a.arrow_icons,icon:m.a})))]);const M=await E.a.get("https://pokeapi.co/api/v2/pokemon/"+(parseInt(e)+1)),K="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(parseInt(e)+1)+".png",Z=M.data.name[0].toUpperCase()+M.data.name.slice(1),J="#/pokemonDetails/"+(parseInt(S)+1);h(e=>[...e,n.a.createElement("a",{href:J},n.a.createElement("div",{id:f.a.next_button,onClick:R},n.a.createElement("img",{src:K}),n.a.createElement("p",{class:f.a.button_headings},Z),n.a.createElement(_.a,{class:f.a.arrow_icons,icon:m.c})))])})},[e]),n.a.createElement("div",{id:f.a.page_container},n.a.createElement("div",{id:f.a.previous_next_row},p,u),n.a.createElement("div",{class:f.a.rows},o,a,l),n.a.createElement("div",{class:f.a.rows},n.a.createElement("div",{id:f.a.outer_evolution_container},n.a.createElement("h1",null,"Evolution Details:"),n.a.createElement("div",{id:f.a.inner_evolution_container},b))))},P=t(14),A=t.n(P);var C=function(){const{id:e}=Object(r.q)(),[a,t]=Object(s.useState)(""),[l,i]=Object(s.useState)("");return Object(r.o)(),Object(w.useMediaQuery)({query:"(orientation: portrait)"}),Object(s.useEffect)(()=>{E.a.get("https://pokeapi.co/api/v2/ability/"+e).then(async e=>{console.log(e);var a=e.data.name[0].toUpperCase()+e.data.name.slice(1),s="";let l=0;if(0==e.data.effect_entries.length)s="This ability does not yet have a description.";else for(;;){if("en"==e.data.effect_entries[l].language.name){s=e.data.effect_entries[l].effect;break}l++}t(e=>[...e,n.a.createElement("div",{id:A.a.ability_container},n.a.createElement("h1",null,a),n.a.createElement("p",null,s))]);for(let t=0;t<e.data.pokemon.length;t++){let a=e.data.pokemon[t].pokemon.url.split("pokemon/")[1].slice(0,e.data.pokemon[t].pokemon.url.split("pokemon/")[1].length-1);if(a<1e4){let s="#/pokemonDetails/"+a;i(l=>[...l,n.a.createElement("a",{href:s},n.a.createElement("div",{id:A.a.pokemon_container},n.a.createElement("h1",null,"No. ",a),n.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+a+".png"}),n.a.createElement("p",null,e.data.pokemon[t].pokemon.name[0].toUpperCase()+e.data.pokemon[t].pokemon.name.slice(1))))])}}})},[e]),n.a.createElement("div",{id:A.a.page_container},a,n.a.createElement("div",{id:A.a.all_pokemon_container},n.a.createElement("h1",{id:A.a.pokemon_title},"Pokemon with this ability:"),l))},S=t(8);var O=function(){return n.a.createElement(S.a,null,n.a.createElement(h,null),n.a.createElement(r.c,null,n.a.createElement(r.a,{exact:!0,path:"/",element:n.a.createElement(p,null)}),n.a.createElement(r.a,{exact:!0,path:"/searchResults",element:n.a.createElement(g,null)}),n.a.createElement(r.a,{exact:!0,path:"/pokemonDetails/:id",element:n.a.createElement(y,null)}),n.a.createElement(r.a,{exact:!0,path:"/abilityDetails/:id",element:n.a.createElement(C,null)})))};var j=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then(a=>{let{getCLS:t,getFID:s,getFCP:n,getLCP:l,getTTFB:i}=a;t(e),s(e),n(e),l(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(n.a.createElement(O,null)),j()},7:function(e,a,t){e.exports={full_page:"Searchresults_full_page__1lG6l",search_title:"Searchresults_search_title__2r1r4",results_section:"Searchresults_results_section__l_MFl",info_container:"Searchresults_info_container__2Bmwa",pokemon_number:"Searchresults_pokemon_number__1n9Ve",pokemon_name:"Searchresults_pokemon_name__21A8L",pokemon_types:"Searchresults_pokemon_types__3I6fN",pokemon_abilities:"Searchresults_pokemon_abilities__3k7Mx",ability_name:"Searchresults_ability_name__3dEYI",ability_description:"Searchresults_ability_description__2cbD_"}}},[[23,1,2]]]);
//# sourceMappingURL=main.4c8ddbeb.chunk.js.map