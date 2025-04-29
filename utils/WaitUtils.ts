/** 
 * WaitUtils class provides methods for introducing waits during test execution.
 */
class WaitUtils {

    /**
     * Waits for a given amount of time.
     *
     * @param timeInSeconds - The time to wait in seconds.
     */
    async waitForGivenTime(timeInSeconds: number): Promise<void> {
        console.log(`Waiting for '${timeInSeconds}' seconds.`);
        await new Promise<void>(resolve => setTimeout(resolve, timeInSeconds * 1000));
    }

}

/**
 * Exports the WaitUtils class as the default export of this module.
 * @module WaitUtils
 */
export default new WaitUtils();