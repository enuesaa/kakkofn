<script lang="ts">
	import FnCard from './FnCard.svelte'
</script>

<div class="flex my-2 p-2 flex-wrap">
	<FnCard href="/fns/jsonformat" title="JSON Format" />
	<FnCard href="/fns/count" title="文字数カウント" />
	<FnCard href="/fns/replace" title="文字列置き換え" />
	<FnCard href="/fns/text-search-count" title="文字列の登場回数" />
	<FnCard href="/fns/remove-linebreak" title="改行削除" />
	<FnCard href="/fns/base64encode" title="Base64 Encode" />
	<FnCard href="/fns/base64decode" title="Base64 Decode" />
	<FnCard href="/fns/urlencode" title="Url Encode" />
	<FnCard href="/fns/urldecode" title="Url Decode" />
	<FnCard href="/fns/unicode-escape" title="Unicode エスケープ" />
	<FnCard href="/fns/unicode-unescape" title="Unicode アンエスケープ" />
	<FnCard href="/fns/colorcode-to-rgb" title="カラーコードからRGBへ" />
	<FnCard href="/fns/rgb-to-colorcode" title="RGBからカラーコードへ" />
</div>
