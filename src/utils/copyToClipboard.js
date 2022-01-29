export const copyToClipboard = (onCopy, toast, toastIdClipboard, title) => {
  onCopy();
  if (!toast.isActive(toastIdClipboard)) {
    toast({
      id: toastIdClipboard,
      title: title,
      variant: 'left-accent',
      isClosable: true,
    });
  }
};
