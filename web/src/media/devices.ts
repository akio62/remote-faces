type DeviceInfo = {
  label: string;
  deviceId: string;
};

export const getVideoDeviceInfoList = async () => {
  try {
    await navigator.mediaDevices.getUserMedia({ video: true });
    const devices = await navigator.mediaDevices.enumerateDevices();
    const list: DeviceInfo[] = devices
      .filter(({ kind }) => kind === "videoinput")
      .map(({ label, deviceId }) => ({ label, deviceId }));
    return list;
  } catch (e) {
    // ignored
    return [];
  }
};

export const getAudioDeviceInfoList = async () => {
  try {
    await navigator.mediaDevices.getUserMedia({ audio: true });
    const devices = await navigator.mediaDevices.enumerateDevices();
    const list: DeviceInfo[] = devices
      .filter(({ kind }) => kind === "audioinput")
      .map(({ label, deviceId }) => ({ label, deviceId }));
    return list;
  } catch (e) {
    // ignored
    return [];
  }
};
