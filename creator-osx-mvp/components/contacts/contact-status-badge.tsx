import { Badge } from '@/components/ui/badge';
import { CONTACT_STATUSES } from '@/lib/constants';
import type { ContactStatus } from '@/lib/constants';

interface ContactStatusBadgeProps {
  status: ContactStatus;
  className?: string;
}

export function ContactStatusBadge({ status, className }: ContactStatusBadgeProps) {
  const statusConfig = CONTACT_STATUSES.find((s) => s.value === status);

  if (!statusConfig) {
    return null;
  }

  const colorClasses = {
    blue: 'bg-blue-50 text-blue-700 border-blue-100',
    yellow: 'bg-yellow-50 text-yellow-700 border-yellow-100',
    orange: 'bg-orange-50 text-orange-700 border-orange-100',
    green: 'bg-green-50 text-green-700 border-green-100',
  };

  return (
    <Badge
      variant="outline"
      className={`${colorClasses[statusConfig.color as keyof typeof colorClasses]} ${className}`}
    >
      {statusConfig.label}
    </Badge>
  );
}

