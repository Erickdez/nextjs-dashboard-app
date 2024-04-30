import { PencilIcon, PlusIcon, TrashIcon, CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { deleteInvoice, changeStatus } from '@/app/lib/actions';

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form action={deleteInvoiceWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}

export function ChangeStatus({ id, status }: { id: string, status: string }) {
  const changeStatusWithId = changeStatus.bind(null, id, status);

  return (
    <form action={changeStatusWithId}>
      <button>
        <span
          className={clsx(
            'inline-flex items-center rounded-full px-2 py-1 text-xs',
            {
              'bg-gray-100 text-gray-500': status === 'pending',
              'bg-green-500 text-white': status === 'paid',
            },
          )}
        >
          {status === 'pending' ? (
            <>
              Pending
              <ClockIcon className="ml-1 w-4 text-gray-500" />
            </>
          ) : null}
          {status === 'paid' ? (
            <>
              Paid
              <CheckIcon className="ml-1 w-4 text-white" />
            </>
          ) : null}
        </span>
      </button>
    </form>
  );
}
