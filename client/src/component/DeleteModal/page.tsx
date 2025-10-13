import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

interface ConfirmDeleteModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function ConfirmDeleteModal({ open, onClose, onConfirm }: ConfirmDeleteModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-red-600">Delete Account</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground mb-4">
          Are you sure you want to delete your account? This action cannot be undone.
        </p>
        <DialogFooter className="flex justify-end gap-2">
          <Button variant="outline" className="cursor-pointer" onClick={onClose} title="Cancel Action">
            Cancel
          </Button>
          <Button variant="destructive" className="cursor-pointer" onClick={onConfirm} title="Delete Account">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
