/**
 * Formats a date string into Indonesian format
 * @param {string} isoString - The ISO date string to format
 * @param {('full'|'short'|'time')} [format='full'] - The format type to use
 * @returns {string} The formatted date string in Indonesian
 * 
 * @example
 * // returns "Senin, 1 Januari 2024"
 * formatEventDate("2024-01-01T00:00:00.000Z", "full")
 * 
 * // returns "1 Januari 2024"
 * formatEventDate("2024-01-01T00:00:00.000Z", "short")
 * 
 * // returns "00:00"
 * formatEventDate("2024-01-01T00:00:00.000Z", "time")
 */
export const formatEventDate = (isoString, format = 'full') => {
    const date = new Date(isoString);

    const formats = {
        full: {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            timeZone: 'Asia/Jakarta'
        },
        short: {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            timeZone: 'Asia/Jakarta'
        },
        time: {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'Asia/Jakarta'
        }
    };

    const monthsIndonesian = {
        'January': 'Januari',
        'February': 'Februari',
        'March': 'Maret',
        'April': 'April',
        'May': 'Mei',
        'June': 'Juni',
        'July': 'Juli',
        'August': 'Agustus',
        'September': 'September',
        'October': 'Oktober',
        'November': 'November',
        'December': 'Desember'
    };

    const daysIndonesian = {
        'Sunday': 'Minggu',
        'Monday': 'Senin',
        'Tuesday': 'Selasa',
        'Wednesday': 'Rabu',
        'Thursday': 'Kamis',
        'Friday': 'Jumat',
        'Saturday': 'Sabtu'
    };

    if (format === 'time') {
        return date.toLocaleTimeString('en-US', formats.time);
    }

    const dayNameEnglish = date.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'Asia/Jakarta' });
    const day = String(date.getDate()).padStart(2, '0');
    const monthEnglish = date.toLocaleDateString('en-US', { month: 'long', timeZone: 'Asia/Jakarta' });
    const year = date.getFullYear();

    const dayName = daysIndonesian[dayNameEnglish];
    const monthName = monthsIndonesian[monthEnglish];

    if (format === 'full') {
        return `${dayName}, ${day} ${monthName} ${year}`;
    }

    if (format === 'short') {
        return `${day} ${monthName} ${year}`;
    }

    return '';
};
