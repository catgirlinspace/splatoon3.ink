import { useAnarchyOpenSchedulesStore, useAnarchySeriesSchedulesStore, useRegularSchedulesStore, useSplatfestSchedulesStore, useXSchedulesStore, useChallengeSchedulesStore } from '@/stores/schedules';
import battleRegularSvg from '@/assets/img/modes/regular.svg';
import battleBankaraSvg from '@/assets/img/modes/bankara.svg';
import battleXSvg from '@/assets/img/modes/x.svg';
import battleLeagueSvg from '@/assets/img/modes/league.svg';
import battleEventSvg from '@/assets/img/modes/event.svg';

export function useScheduleTypes() {
  const types = {
    regular: {
      name: 'schedule.types.regular',
      badge: null,
      store: useRegularSchedulesStore(),
      img: battleRegularSvg,
      bg: 'bg-splatoon-battle-regular bg-tapes',
    },
    anarchySeries: {
      name: 'schedule.types.anarchy',
      badge: 'schedule.types.series',
      store: useAnarchySeriesSchedulesStore(),
      img: battleBankaraSvg,
      bg: 'bg-splatoon-battle-ranked bg-tapes',
    },
    anarchyOpen: {
      name: 'schedule.types.anarchy',
      badge: 'schedule.types.open',
      store: useAnarchyOpenSchedulesStore(),
      img: battleBankaraSvg,
      bg: 'bg-splatoon-battle-ranked bg-tapes',
    },
    xMatch: {
      name: 'schedule.types.xmatch',
      badge: null,
      store: useXSchedulesStore(),
      img: battleXSvg,
      bg: 'bg-splatoon-battle-xmatch bg-tapes',
    },
    splatfest: {
      name: 'schedule.types.splatfest',
      badge: null,
      store: useSplatfestSchedulesStore(),
      img: battleRegularSvg,
      bg: 'bg-splatoon-battle-regular bg-tapes',
    },
    challenge: {
      name: 'schedule.types.challenge',
      badge: null,
      store: useChallengeSchedulesStore(),
      img: battleEventSvg,
      bg: 'bg-splatoon-battle-league bg-tapes',
    },
  };

  return { types };
}
