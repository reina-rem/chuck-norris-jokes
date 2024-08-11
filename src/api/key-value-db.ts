const DB_NAME = 'key-value-db'
const DB_VERSION = 1
const STORE_NAME = 'store'

const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)

    request.onupgradeneeded = event => {
      const db = (event.target as IDBOpenDBRequest).result
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME)
      }
    }

    request.onsuccess = event => {
      resolve((event.target as IDBOpenDBRequest).result)
    }

    request.onerror = event => {
      reject((event.target as IDBOpenDBRequest).error)
    }
  })
}

export const getValue = (key: string): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    const db = await openDB()
    const transaction = db.transaction(STORE_NAME, 'readonly')
    const store = transaction.objectStore(STORE_NAME)
    const request = store.get(key)

    request.onsuccess = () => {
      resolve(request.result)
    }

    request.onerror = event => {
      reject((event.target as IDBRequest).error)
    }
  })
}

export const setValue = (key: string, value: any): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    const db = await openDB()
    const transaction = db.transaction(STORE_NAME, 'readwrite')
    const store = transaction.objectStore(STORE_NAME)
    const request = store.put(value, key)

    request.onsuccess = () => {
      resolve()
    }

    request.onerror = event => {
      reject((event.target as IDBRequest).error)
    }
  })
}
