import { jsonFormat } from '$lib/fns/json-format'
import { yamlFormat } from '$lib/fns/yaml-format'
import { encodeBase64, decodeBase64 } from '$lib/fns/base64-encoding'
import { encodeUrl, decodeUrl } from '$lib/fns/url-encoding'
import { removeLineBreak } from '$lib/fns/remove-linebreak'

export type ProtoFn = {
	id: string
	label: string
	/** この入力に対して出す価値があるか */
	accepts: (text: string) => boolean
	run: (text: string) => Promise<string>
}

const isJson = (text: string): boolean => {
	try {
		JSON.parse(text)
		return true
	} catch (e) {}

	return false
}

const isYaml = (text: string): boolean => {
	if (isJson(text)) {
		return false
	}

	// ゆるい判定。 `key: value` か `- item` があれば yaml とみなす
	return text.split('\n').some((line) => /^\s*(-\s+\S|[\w".-]+\s*:(\s|$))/.test(line))
}

const isBase64 = (text: string): boolean => {
	const trimmed = text.trim()

	return trimmed.length >= 8 && trimmed.length % 4 === 0 && /^[A-Za-z0-9+/]+={0,2}$/.test(trimmed)
}

const isUrlEncoded = (text: string): boolean => {
	return /%[0-9A-Fa-f]{2}/.test(text)
}

const hasText = (text: string): boolean => {
	return text.trim() !== ''
}

export const fns: ProtoFn[] = [
	{
		id: 'jsonformat',
		label: 'JSON Format',
		accepts: isJson,
		run: async (text) => jsonFormat(text),
	},
	{
		id: 'yamlformat',
		label: 'YAML Format',
		accepts: isYaml,
		run: (text) => yamlFormat(text),
	},
	{
		id: 'base64decode',
		label: 'Base64 Decode',
		accepts: isBase64,
		run: async (text) => decodeBase64(text.trim()),
	},
	{
		id: 'urldecode',
		label: 'URL Decode',
		accepts: isUrlEncoded,
		run: async (text) => decodeUrl(text),
	},
	{
		id: 'remove-linebreak',
		label: '改行を削除',
		accepts: (text) => text.includes('\n'),
		run: async (text) => removeLineBreak(text),
	},
	{
		id: 'base64encode',
		label: 'Base64 Encode',
		accepts: hasText,
		run: async (text) => encodeBase64(text),
	},
	{
		id: 'urlencode',
		label: 'URL Encode',
		accepts: hasText,
		run: async (text) => encodeUrl(text),
	},
]

export const findFn = (id: string): ProtoFn | undefined => {
	return fns.find((fn) => fn.id === id)
}

export const suggest = (text: string): ProtoFn[] => {
	if (!hasText(text)) {
		return []
	}

	return fns.filter((fn) => fn.accepts(text))
}

/** 入力に fn を順に適用する。途中で空になったらそこで止める */
export const runChain = async (text: string, ids: string[]): Promise<string> => {
	let current = text

	for (const id of ids) {
		const fn = findFn(id)
		if (fn === undefined) {
			continue
		}
		const next = await fn.run(current)
		if (next === '') {
			break
		}
		current = next
	}

	return current
}
