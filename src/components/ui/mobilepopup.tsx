const MobilePopUp = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
            <div className="bg-card rounded-lg p-8 max-w-sm text-center border border-border">
                <h2 className="text-xl font-semibold mb-4 text-primary">Mobile View</h2>
                <p className="text-neutral-foreground">Mobile is still in progress for some smaller screens. Please switch to a larger screent to play.</p>
            </div>
        </div>
    );
}

export default MobilePopUp