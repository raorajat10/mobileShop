"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import type { Service } from "@/lib/types"

interface ServiceDrawerProps {
  service: Service | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ServiceDrawer({ service, open, onOpenChange }: ServiceDrawerProps) {
  if (!service) return null

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed inset-x-0 bottom-0 bg-white dark:bg-neutral-900 rounded-t-2xl max-h-[85%] overflow-y-auto p-6 z-50 animate-slideUp">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {service.title}
            </Dialog.Title>
            <Dialog.Close>
              <X className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
            </Dialog.Close>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{service.description}</p>
          {service.features && (
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
