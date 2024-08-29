type MultiStateToggleProps = {
    state: 'critical' | 'high' | 'low';
    onAction: () => void;
    size?: 'xs' | 'sm' | 'lg' | 'xl' | 'xxl';
    colors?:{low:string, high:string, critical:string}
  };

export type { MultiStateToggleProps };