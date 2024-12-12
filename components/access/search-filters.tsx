'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAccessStore } from '@/stores/access-store';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

export function SearchFilters() {
  const { filters, setFilter } = useAccessStore();

  return (
    <div className="flex flex-wrap gap-4">
      <Select value={filters.category} onValueChange={(value) => setFilter('category', value)}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="health">Health</SelectItem>
          <SelectItem value="finance">Finance</SelectItem>
          <SelectItem value="technology">Technology</SelectItem>
          <SelectItem value="education">Education</SelectItem>
        </SelectContent>
      </Select>

      <Select value={filters.fileType} onValueChange={(value) => setFilter('fileType', value)}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="File Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="csv">CSV</SelectItem>
          <SelectItem value="json">JSON</SelectItem>
          <SelectItem value="text">Text</SelectItem>
        </SelectContent>
      </Select>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[200px] justify-start text-left font-normal">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {filters.date ? format(filters.date, 'PPP') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={filters.date}
            onSelect={(date) => setFilter('date', date)}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      <Select value={filters.sort} onValueChange={(value) => setFilter('sort', value)}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="relevance">Relevance</SelectItem>
          <SelectItem value="recent">Most Recent</SelectItem>
          <SelectItem value="popular">Most Popular</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}