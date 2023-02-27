if ('wakeLock' in navigator) {
    const requestWakeLock = async () => {
        try {
            wakeLock = await navigator.wakeLock.request('screen');

        } catch (err) {
            // if wake lock request fails - usually system related, such as battery
        }
    } // requestWakeLock()
    requestWakeLock();
} 