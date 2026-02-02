let playQueue = [];

/* Add song to end of queue */
export function addToQueue(index) {
  playQueue.push(index);
}

/* Play next (highest priority) */
export function playNext(index) {
  playQueue.unshift(index);
}

/* Get next song index (or null) */
export function getNextFromQueue() {
  return playQueue.length ? playQueue.shift() : null;
}

/* Clear queue (optional, future use) */
export function clearQueue() {
  playQueue = [];
}

/* Debug / UI use */
export function getQueue() {
  return [...playQueue];
}
