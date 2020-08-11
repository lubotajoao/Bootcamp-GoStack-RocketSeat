import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.15.20:3333/",
});

export default api;

/**
 * Para baseUR:
 *
 * iOS com emulador: localhost
 * iOS com físico: IP da máquina
 * Android com emulador: localhost (adb reverse)
 * Android com emulador: 10.0.2.2 (Android Studio)
 * Android com emulador: 10.0.3.2 (Genymotion)
 * Android com físico: IP da máquina
 */
