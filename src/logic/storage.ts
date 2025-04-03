import { useWebExtensionStorage } from '~/composables/useWebExtensionStorage'

export const storageDemo = useWebExtensionStorage('webext-demo', 'Storage Demo')
export const storageQuality = useWebExtensionStorage('webext-storageQuality', '360p')
