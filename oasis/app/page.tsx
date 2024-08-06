import onboardingStyle from "./css/onboarding.module.css";
import Image from 'next/image';

export default function Onboarding() {
  return (
   <div className={onboardingStyle.onboardingWrap}>
    <div className={onboardingStyle.logoWrap}>
      <Image src="/images/oasisLogo.png" alt="OASIS" width={214} height={214} />
      <div className={onboardingStyle.logoTitle}>OASIS</div>
    </div>
    <div className={onboardingStyle.waveWrap}>
      <div className={onboardingStyle.wave1}></div>
      <div className={onboardingStyle.wave2}></div>
      <div className={onboardingStyle.wave3}></div>
    </div>
   </div>
  );
}
