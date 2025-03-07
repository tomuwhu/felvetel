<script>
  var i = $state(0)
  let { data } = $props() 
</script>
<h1>Eszköz nyilvántartó program</h1>
<a 
  class="ui blue button"
  href="/cica">Kattints ide</a>
<h2>{i}</h2>
<h3>{data.x}</h3>